import { useRouter } from "next/Router";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import RacetrackImg from "/components/askNew/RacetrackImg/RacetrackImg";


import AnswerList from "../Answer/AnswerList";
import Answer from "../AnswerZero/Answer";
import CommentList from "../Comment/CommentList";
import Contribute from "../Contribute/Contribute";
import Question from "../Question/Question";
import ViewCardList from "../ViewSimilar/ViewCardList";
import Navbar from "/components/headerC/Navbar/Navbar";

import styles from "..//Main.module.scss";
import Footer from "../Footer/Footer";

function Main({ data }) {
  console.log("main", data);
  const router = useRouter();
  const [value, setValue] = useState("");
  const [answerList, setAnswerList] = useState(data?.result?.Answers)
  console.log(data?.result?.Answers)
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
  ]);

  useEffect(() => {
    setAnswerList(data?.result?.Answers)
  }, [data?.result?.Answers])

  console.log("amswerlist", answerList)
  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <aside></aside>
        <div className={styles.mainWrapper}>
          <div className={styles.header}>
            <Navbar />
          </div>
          <div className={styles.contentWrapper}>
            <main>
              <section className={styles.questionContainer}>
                <Question questionData={data?.result} />
                <div className={styles.commentList}>
                  <CommentList comments={data?.result?.Comments} QUUID={data?.result?.QUUID} AUUID={""} />
                </div>
                <section className={styles.answerListWrapper}>
                  {answerList.length == 0 && (
                    <Answer />
                  )}
                  {answerList.length > 0 && (
                    <AnswerList answers={answerList} QUUID={data?.result?.QUUID} />
                  )}
                </section>
                <section className={styles.contributeWrapper}>
                  <Contribute value={value} setValue={setValue} answers={answerList} QUUID={data?.result?.QUUID} setAnswerList={setAnswerList} />
                </section>
                <section className={styles.viewSimilarWrapper}>
                  <ViewCardList questionData={data} />
                </section>
              </section>
            </main>
          </div>
        </div>
      </div>
      <RacetrackImg />
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default Main;
