import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PopularQuestionsList.module.scss";
import DashedEdge from "../dashedEdgeForAsk/DashedEgde";
import PopularQuestion from "./PopularQuestion";
import nextImg from "../../../public/images/ask/next.png";
import { useCookies } from "react-cookie";
import { _getDataWithoutAuth } from "../../../../hooks/req";
import { HotQuestionsUrl } from "../../../../lib/urls";

function PopularQuestionsList() {
  const [hotQues, sethotQues] = useState([]);
  useEffect(() => {
    _getDataWithoutAuth(HotQuestionsUrl)
      .then((result) => sethotQues(result.response.result))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className={styles.container}>
      <h2>
        Popular Questions
        <span>
          <div className={styles.img}>
            <Image
              src="/public/dstatic/PopularQuestionsforAsk/next.png"
              alt={""}
              fill={true}
			  className={styles.setInitialPositionTrue}
            />
          </div>
        </span>
      </h2>
      <div className={styles.listContainer}>
        <div className={styles.edgeBorder}>
          <DashedEdge />
        </div>
        <div className={styles.listWrapper}>
          {hotQues.length > 0 &&
            hotQues
              .filter((i, k) => k < 5)
              .map((item, i) => (
                <div key={i}>
                  <PopularQuestion {...item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default PopularQuestionsList;
