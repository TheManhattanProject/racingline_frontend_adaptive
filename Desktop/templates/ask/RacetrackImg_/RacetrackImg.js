import styles from "./RacetrackImg.module.scss";

function RacetrackImg() {
  return (
    <div className={styles.img}>
      <img
        className={styles.desktop}
        src="/dstatic/headerForAsk/racetrack.png"
        alt="racetrack"
      />
      <img
        className={styles.mobile}
        src="/dstatic/headerForAsk/racetrackM.png"
        alt="racetrack"
      />
    </div>
  );
}

export default RacetrackImg;
