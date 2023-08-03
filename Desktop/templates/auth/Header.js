import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import logoImg from "../../public/dstatic/home/logo.png";
import arrowImg from "../../public/dstatic/auth/arrowLeft.png";

function Header() {
  return (
    <header className={styles.header}>
      <figure
        className={styles.backArrow}
        onClick={() => {
          history.back();
        }}
      >
        <Image alt={"Back Arrow"} src={arrowImg} className={styles.img} fill />
      </figure>
      <figure className={styles.logo}>
        <Image
          src={logoImg}
          alt={"RacingLine Logo"}
          className={styles.img}
          fill
        />
      </figure>
    </header>
  );
}

export default Header;
