import Image from "next/image";
import styles from "./element1.module.css";

const Element1 = () => {
  const combineClassNameAccelerateText = `${styles.element1content} ${styles.upperText}`;
  const combineClassNameFor = `${styles.flexContainer} ${styles.height}`;
  const combineClassNameForText = `${styles.element1content} ${styles.leftText}`;
  const combineClassNameCarsText = `${styles.element1content} ${styles.rightText}`;
  const combineClassNamePara = `${styles.flexContainer} ${styles.bottomtext2}`;

  return (
    <div className={styles.element1}>
      <div className={styles.background} />
      <div className={styles.element1container}>
        <div className={styles.element1contentcontainer}>
          <div className={styles.flexContainer}>
            <h2 className={combineClassNameAccelerateText}>
              Accelerating Your Passion
            </h2>
          </div>
        </div>
        <div className={combineClassNameFor}>
          <span className={combineClassNameForText}>For</span>
          <div className={styles.element1mainSVG}>
            <Image src="/dstatic/home/element1/Rectanglemv.png" fill={true} />
          </div>
          <span className={combineClassNameCarsText}>Cars</span>
        </div>
      </div>
      <div className={combineClassNamePara}>
        <p className={styles.bottomText}>
          Fuel your love for all things cars, auto-racing, and automotive tech
          with a community of passionate individuals, experts, and fellow car
          enthusiasts.
        </p>
        <h4 className={styles.bottomButton}>Explore</h4>
      </div>
    </div>
  );
};

export default Element1;
