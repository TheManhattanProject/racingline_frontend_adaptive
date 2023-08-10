import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <div className={styles.maindiv}>
      <div>
        <div className={styles.Headdiv}>
          <img
            src="/public/dstatic/headingForHotQues/hotques.svg"
            className={styles.hotimg}
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
