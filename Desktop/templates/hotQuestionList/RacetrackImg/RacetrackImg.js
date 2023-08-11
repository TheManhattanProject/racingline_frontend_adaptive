import React from "react";
import styles from "./RacetrackImg.module.scss";
import Image from "next/image";

function RacetrackImg() {
  return (
    <div className={styles.img}>
      <div className={styles.desktop}>
      <Image
        className={styles.setInitialPositionTrue}
        src="/dstatic/hotquestions/racetrack.png"
        alt="racetrack"
        fill={true}
      />
      </div>
      <div className={styles.mobile}>
      <Image
        className={styles.setInitialPositionTrue}
        src="/dstatic/hotquestions/racetrackM.png"
        alt="racetrack"
        fill={true}
      />
      </div>
      
    </div>
  );
}

export default RacetrackImg;
