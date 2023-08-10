import Mde from "@/components/ui/mde/index";
import Spinner from "@/components/ui/spinner/index";
import post from "@/lib/post";
import { CreateQuestion } from "@/lib/urls";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./AskQuestion.module.scss";

function middlewareForValidation({ titleValue, tags, value }) {
  if (titleValue === '') return false;
  if (value === '') return false;
  if (tags && tags.length === 0) return false;
  return true;
}

function AskQuestion() {
  const [titleValue, setTitleValue] = useState("");
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState("");
  const [tagsValue, setTagsValue] = useState("");
  const [spin, setSpin] = useState(false);
  const Router = useRouter();


  /***
   * set value son initial render!
  */
  useEffect(() => {
    setTitleValue(cookies.title);
    if (cookies.tags !== undefined) {
      setTags(cookies.tags);
    } else {
      setTags([]);
    }
    setValue(cookies.description);
  }, []);
  useEffect(() => {
    console.log('tags', tags);

  }, [tags]);

  /***
   * remove tag on given index!
  */
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  /***
   * add tag on given index!
  */
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
  const [cookies] = useCookies([
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

  const submitHandler = useCallback(async () => {
    if (!middlewareForValidation({ titleValue, tags, value })) return alert("Not valid info!");
    const body = {
      title: titleValue,
      description: value,
      tags: tagsValue ? [tagsValue, ...tags] : [...tags],
    }
    const url = CreateQuestion;
    const { suc, res } = await post({ url, cookies, body });
    if (!suc) return Router.push("/auth/login");
    setTitleValue("");
    setValue("");
    setTagsValue("");
    setTags([]);
    setSpin(false);
    return res;
  }, [cookies, titleValue, value, tags]);

  return (
    <div className={styles.container}>
      <div className={styles.questionContainer}>
        <figure className={styles.imgWrapper}>
          <div>
            <Image
              src="/dstatic/headerForAsk/edge.png"
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
              src="/dstatic/headerForAsk/edge.png"
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
              src="/dstatic/headerForAsk/edge.png"
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
