import React from "react";
import styles from "../ContributeforAsk/Contribute.module.scss";
import DashedBorder from "./DashedBorder";
import TextArea from "../ContributeforAsk/TextArea";

function Contribute({value, setValue, answers, QUUID, setAnswerList}) {
  console.log(QUUID)
  return (
    <div className={styles.container}>
      <h2>Have a say? Contribute to Community Answers. </h2>
      <div className={styles.textArea}>
        <hr />
        <TextArea value = {value} setValue={setValue} answers={answers} QUUID={QUUID} setAnswerList={setAnswerList} />
      </div>
    </div>
  );
}

export default Contribute;
