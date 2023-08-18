import React from "react";
import styles from "./AnswerListItem.module.scss";
import Answer from "./Answer";
import CommentList from "../Comment/CommentList";

function AnswerListItem({ key, item, QUUID }) {
  //console.log(item)
  return (
    <div className={styles.answerContainer} key={key}>
      <Answer
        answer={item}
        AUUID={item?.AUUID}
        QUUID={QUUID}
        createdAt={item?.CreatedAt}
      />
      <div className={styles.commentListWrapper}>
        <CommentList
          comments={item?.Comments}
          AUUID={item?.AUUID}
          QUUID={QUUID}
        />
      </div>
    </div>
  );
}

export default AnswerListItem;
