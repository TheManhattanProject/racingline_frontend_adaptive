import React, { useState, useCallback, useRef } from "react";
import styles from "./TextArea.module.scss";
import { useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import DashedBorder from "./DashedBorder";
import { Cookies, useCookies } from "react-cookie";
import { useRouter } from "next/Router";
import { RefreshToken, CreateAnswer } from "../../../lib/urls";
const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";

function TextArea({ value, setValue, answers, QUUID, setAnswerList }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies([
    "firstName",
    "lastName",
    "profileImage",
    "accessToken",
    "refreshToken",
    "accessTokenExpiresAt",
    "refreshTokenExpiresAt",
    "redirectRoute",
    "routeQuery",
    "answerText",
  ]);

  const createAnswer = useCallback(async () => {
    if (value.length == 0) {
      alert("Field cannot be empty");
      return;
    }
    setLoading(true);
    var accessToken = cookies.accessToken;

    if (cookies.refreshToken === undefined) {
      setCookie("redirectRoute", router.pathname, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("routeQuery", router.query, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("answerText", value, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      router.push("/login");
      return;
    }

    const accessTokenExpiryTime = new Date(cookies.accessTokenExpiresAt);
    const refreshokenExpiryTime = new Date(cookies.refreshTokenExpiresAt);
    var currentdate = new Date();
    if (refreshokenExpiryTime <= currentdate) {
      setCookie("redirectRoute", router.pathname, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("routeQuery", router.query, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("answerText", value, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      router.push("/login");
      return;
    }

    if (accessTokenExpiryTime <= currentdate) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({ refresh_token: cookies.refreshToken });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const response = await fetch(RefreshToken, requestOptions);
      const result = await response.json();
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
    if (accessToken === "") {
      setCookie("redirectRoute", router.pathname, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("routeQuery", router.query, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("answerText", value, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      router.push("/login");
    }
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + accessToken);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      answer: `${value}`,
    });

    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch(`${CreateAnswer}${QUUID}/`, requestOptions);
    const result = await response.json();
    //console.log("ressss",result);
    setLoading(false);
    setValue("");
    setAnswerList([
      ...answers,
      {
        AUUID: result?.answer,
        Description: value,
        FirstName: cookies.firstName,
        LastName: cookies.lastName,
        CreatedAt: new Date().toISOString(),
        Comments: [],
        UpvotesCount: 0,
        DownvotesCount: 0,
        ProfileImage: cookies.profileImage,
        Verified: false,
      },
    ]);
    try {
      removeCookie("redirectRoute", { path: "/" });
      removeCookie("routeQuery", { path: "/" });
      removeCookie("answerText", { path: "/" });
    } catch (e) {
      console.log(e);
    }
  }, [cookies, value]);

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: false,
      spellChecker: false,
      toolbar: ["bold", "italic", "link", "image", "quote"],
    };
  }, []);

  useEffect(() => {
    if (cookies.answerText) {
      setValue(cookies.answerText);
    } else {
      setValue("");
    }
  }, []);

  const onChange = useCallback((value) => {
    setValue(value);
  });

  return (
    <div className={styles.inputtext}>
      <SimpleMdeReact
        placeholder={"Type your answer....."}
        options={autofocusNoSpellcheckerOptions}
        value={value}
        onChange={onChange}
      />
      <DashedBorder />
      <button
        type="submit"
        className={`${styles.postBtn} postBtn`}
        onClick={createAnswer}
        disabled={loading}
      >
        {loading ? <img src="/static/question/loader.svg" /> : <p>Post</p>}
      </button>
    </div>
  );
}

export default TextArea;
