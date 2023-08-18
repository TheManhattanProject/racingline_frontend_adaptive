import Image from "next/image";
import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.hotimg}>
        <Image
          src="/dstatic/headingForHotQues/hotques.svg"
          alt={"edge"}
          fill={true}
          className={styles.setInitialPositionTrue}
        />
      </div>
    </div>
  );
};

export default Heading;
