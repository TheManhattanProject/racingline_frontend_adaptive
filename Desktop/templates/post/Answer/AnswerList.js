import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AnswerList.module.scss";
import AnswerListItem from "/components/questionById/Answer/AnswerListItem";
import DashedBorder from "/components/questionById/UI/DashedBorder";
import viewMoreImg from "/public/images/questionById/viewmore.png";

function AnswerList({ answers, QUUID }) {
  const [list, setList] = useState(answers);
  const [limit, setLimit] = useState(5);

  const handleViewMore = () => {
    if (limit <= answers.length) {
      setLimit(limit + 5);
    }
  };
  //console.log("list ans", list);

  return (
    <div className={styles.answersSectionContainer}>
      <h2 className={styles.sectionHeading}>
        Answers{answers?.length > 0 && <span>{answers?.length}</span>}
      </h2>
      {answers
        .filter((_, index) => index < limit)
        .map((answer, index) => {
          return <AnswerListItem key={index} item={answer} QUUID={QUUID} />;
        })}
      <div>
        <DashedBorder />
      </div>

      {answers.length > limit && (
        <button className={styles.viewMoreBtn} onClick={handleViewMore}>
          <span className={styles.btnImg}>
            <Image
              src={viewMoreImg}
              alt="view more"
              className={styles.img}
              fill
            />
          </span>
          {"View More Answers"}
        </button>
      )}
    </div>
  );
}

export default AnswerList;
