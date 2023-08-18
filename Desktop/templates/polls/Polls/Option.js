import millify from "millify";
import { useEffect, useState } from "react";
import styles from "./Option.module.scss";

function Option({
  cuuid,
  title,
  vote_count,
  count,
  selectedPoll,
  onChoicesHandler,
  dis,
}) {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(`${(100 * vote_count) / count}%`);
  });

  return (
    <div className={styles.optionContainer}>
      <div className={styles.radioWrapper}>
        <input
          type="radio"
          className="pollRadio"
          checked={selectedPoll == cuuid}
          onChange={(e) => onChoicesHandler(cuuid)}
          disabled={dis}
        />
      </div>
      <div className={styles.optionWrapper}>
        <p className={styles.optionText}>{title}</p>
        <span className={styles.percentagemob}>
          {millify(Number(vote_count))}%
        </span>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: width }}></div>
          </div>
          <span className={styles.percentage}>
            {millify(Number(vote_count))}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Option;
