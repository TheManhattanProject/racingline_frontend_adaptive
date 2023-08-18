import React from "react";
import Image from "next/image";
import styles from "./Racetrack.module.scss";
import racetrackImg from "../../../public/images/questionById/racetrack.png";

function Racetrack() {
  return (
    <figure className={styles.container}>
      <Image src={racetrackImg} className={styles.img} alt={"alt"} fill />
    </figure>
  );
}

export default Racetrack;
