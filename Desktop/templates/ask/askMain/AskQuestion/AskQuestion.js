import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import { RefreshToken, CreateQuestion } from "../../../../lib/urls";
import Image from "next/image";
import styles from "./AskQuestion.module.scss";
import TextArea from "../ContributeforAsk/TextArea";
import edgeImg from "../../../public/images/ask/edge.png";
import Spinner from "../spinner/index";
import { useRouter } from "next/router";
import Mde from "../../@lib/mde/mde";

function AskQuestion() {
  const [titleValue, setTitleValue] = useState("");
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState("");
  const [tagsValue, setTagsValue] = useState("");
  const [spin, setSpin] = useState(false);

  const Router = useRouter();

  const [cookies, setCookie, removeCookie] = useCookies([
    "firstName",
    "lastName",
    "profileImage",
    "accessToken",
    "refreshToken",
    "accessTokenExpiresAt",
    "refreshTokenExpiresAt",
    "title",
    "tags",
    "description",
    "redirectRoute",
  ]);

  useEffect(() => {
    setTitleValue(cookies.title);
    if (cookies.tags !== undefined) {
      setTags(cookies.tags);
    } else {
      setTags([]);
    }
    setValue(cookies.description);
  }, []);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addTags = (event) => {
    var newtagadd = event.target.value.trim();
    if (newtagadd !== "") {
      if (tags.indexOf(newtagadd) > -1) {
      } else {
        setTags([...tags, newtagadd]);
      }
      event.target.value = "";
      setTagsValue("");
    }
  };

  const submitHandler = useCallback(async () => {
    // console.log("not signed1");

    // if (spin) return;
    // console.log("not signed2");

    // if (!titleValue) return Router.push("/login");
    // console.log("not signed3");

    if (!value) return;
    console.log("not signed4");

    if (!tags || tags.length == 0) return;

    setSpin(true);

    var accessToken = cookies.accessToken;
    if (
      cookies.refreshTokenExpiresAt > new Date() ||
      cookies.refreshTokenExpiresAt === "undefined" ||
      cookies.refreshToken === undefined
    ) {
      console.log("not signed");
      return Router.push("/login");
    }
    if (
      new Date(cookies.accessTokenExpiresAt) <= new Date() ||
      cookies.accessTokenExpiresAt == "undefined" ||
      cookies.accessTokenExpiresAt == undefined
    ) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var bodyInfo = JSON.stringify({
        refresh_token: cookies.refreshToken,
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: bodyInfo,
        redirect: "follow",
      };
      try {
        const fetch_response = await fetch(RefreshToken, requestOptions);
        if (fetch_response.ok) {
          const response = await fetch_response.text();
          const result = await JSON.parse(response);
          setCookie("accessToken", result.access_token, {
            path: "/",
            maxAge: 2592000,
            sameSite: true,
          });
          setCookie("accessTokenExpiresAt", result.access_token_expires_at, {
            path: "/",
            maxAge: 2592000,
            sameSite: true,
          });
          accessToken = result.access_token;
        }
      } catch (err) {
        console.log(err);
      }
    }
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      title: titleValue,
      description: value,
      tags: tagsValue ? [tagsValue, ...tags] : [...tags],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(CreateQuestion, requestOptions);
      console.log(response);
      if (!response.ok) throw new Error("Server is Down!");
      const result = await response.json();
      return Router.push(`/question/${result.id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setTitleValue("");
      setValue("");
      setTagsValue("");
      setTags([]);
      setSpin(false);
    }
  }, [cookies, titleValue, value]);

  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        <figure className={styles.imgWrapper}>
          <div>
            <Image
              src="/public/dstatic/headerForAsk/edge.png"
              alt={"edge"}
              fill={true}
              className={styles.setInitialPositionTrue}
            />
          </div>
        </figure>
        <div className={styles.questionWrapper}>
          <h2>what’s Your Question?</h2>
          <div className={styles.inputWrapper}>
            <hr />
            <input
              type="text"
              placeholder="Eg. How long does racing fuel last?"
              value={titleValue || ""}
              onChange={(e) => {
                setTitleValue(e.target.value);
              }}
              required
            />
            <hr />
          </div>
        </div>
      </div>
      <div className={styles.tagsContainer}>
        <figure>
          <div className={styles.img}>
            <Image
              src="/public/dstatic/headerForAsk/edge.png"
              alt={"edgeimg"}
              className={styles.setInitialPositionTrue}
              fill={true}
            />
          </div>
        </figure>
        <div className={styles.tagsWrapper}>
          <h2>Tag Your Question</h2>
          <p>
            Using relevant tags helps your question get more reach and more
            answers.
          </p>
          <div className={styles.inputWrapper}>
            <hr />
            <input
              type="text"
              placeholder="Eg. F1 Racing"
              value={tagsValue || ""}
              onKeyUp={(event) => (event.key === " " ? addTags(event) : null)}
              onChange={(e) => {
                // setTags([...tags,e.target.value])
                setTagsValue(e.target.value);
              }}
            />
            <hr />
            <div className={styles.tagList}>
              {tags.map((item, key) => (
                <div className={styles.tagItem} key={key}>
                  <span>
                    {item.length > 25 ? `${item.slice(0, 25)}...` : item}
                  </span>
                  <button
                    onClick={() => {
                      removeTags(key);
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.tagContainer}></div>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <figure>
          <div className={styles.img}>
            <Image
              src="/public/dstatic/headerForAsk/edge.png"
              alt={"edge"}
              className={styles.setInitialPositionTrue}
              fill={true}
            />
          </div>
        </figure>
        <div className={styles.decriptionWrapper}>
          <h2>Describe Your Query</h2>
          <p>
            A detailed description of your question can help users better
            comprehend and respond to help you out.
          </p>
          <div className={`${styles.textArea} aeoifhaweif`}>
            <hr />
            <Mde setMarkdownValue={setValue} />
            <hr />
          </div>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.postBtn} onClick={submitHandler}>
          {spin ? <Spinner /> : "POST"}
        </button>
      </div>
    </div>
  );
}

export default AskQuestion;
