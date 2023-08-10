import React from "react";
import styles from "./RacetrackImg.module.scss";

function RacetrackImg() {
  return (
    <div className={styles.img}>
      <img
        className={styles.desktop}
        src="/public/dstatic/headerForAsk/racetrack.png"
        alt="racetrack"
      />
      <img
        className={styles.mobile}
        src="/public/dstatic/headerForAsk/racetrackM.png"
        alt="racetrack"
      />
    </div>
  );
}

export default RacetrackImg;
