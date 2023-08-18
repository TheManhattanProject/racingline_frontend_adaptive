import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "/components/questionById/AnswerZero/Answer.module.css";
import cup from "/public/static/questionById/cup.png";
import DashedBorder from "/components/questionById/UI/DashedBorder";


function Answer() {



    return (
        <div className={styles.answersSectionContainer}>
            <h2 className={styles.sectionHeading}>
                Answers <span>0</span>
            </h2>

            <div>
                <DashedBorder />
            </div>
            <div className={styles.trophyContainer}>
                <div className={styles.cupContainer}>
                    <Image src={cup} width={120} height={124} alt="cup" className={styles.cupImg} />
                </div>
                <div className={styles.textContainer}>
                    BECOME THE FIRST  ONE TO ANSWER
                </div>
            </div>


        </div>
    );
}

export default Answer;
