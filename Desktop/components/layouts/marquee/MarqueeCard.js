import React from "react";
import styles from "./MarqueeCard.module.scss";
import Image from "next/image";

function MarqueeCard({ carName, model, engine, output, launchYear, imgUrl }) {
  return (
    <div className={styles.cardWrapper}>
      <Image
        src="/dstatic/questions/rectangle.png"
        alt="rectangle"
        height={230}
        width={260}
        className={styles.background}
      />
      <div className={styles.left}>
        <h1 className={styles.carName}>{carName}</h1>
        <div className={styles.carImg}>
          <img src={imgUrl} alt="carimg" />
        </div>
      </div>
      <div className={styles.carDetails}>
        <p className={styles.detail}>
          <span className={styles.title}>model</span>
          {model}
        </p>
        <p className={styles.detail}>
          <span className={styles.title}>engine</span>
          {engine}
        </p>
        <p className={styles.detail}>
          <span className={styles.title}>output</span>
          {output}
        </p>
      </div>
      <h1 className={styles.year}>{launchYear}</h1>
    </div>
  );
}

export default MarqueeCard;
