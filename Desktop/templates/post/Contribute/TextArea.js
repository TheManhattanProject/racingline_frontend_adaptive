import post from "@/lib/post";
import { CreateAnswer } from "@/lib/urls";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import DashedBorder from "../UI/DashedBorder";
import styles from "./TextArea.module.scss";
const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

function TextArea({ value, setValue, answers, QUUID, setAnswerList }) {
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies([
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
    if (value.length == 0) return alert("Field cannot be empty");
    setLoading(true);

    const body = { answer: `${value}` };
    const url = `${CreateAnswer}${QUUID}/`
    post({ url, cookies, body })
      .then(({ suc, res }) => {
        if (suc) {
          setLoading(false);
          setValue("");
          setAnswerList([
            ...answers,
            {
              AUUID: res?.answer || "",
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
        }
      })
      .catch((e) => {
        console.log(e);
      });



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
