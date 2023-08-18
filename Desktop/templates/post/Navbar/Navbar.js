import React from "react";
import styles from "/components/questionById/Navbar/Navbar.module.scss";
import Image from "next/image";
import logoImg from "/public/logo.png";
import trophyImg from '/public/images/questionById/trophy.png'
import Link from "next/link";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.mobileMenu}>
        <div className={styles.hamburgerMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
      <div className={styles.headerItems}>
        <figure>
          <Image
            src={logoImg}
            className={styles.logoImg}
            alt={"logo image"}
            fill
          />
          {/* <figcaption>Logo</figcaption> */}
        </figure>
        <nav>
          <ul>
            <li>
              <Link href={"/question_list"} className={styles.link}>
                QUESTIONS
              </Link>
            </li>
            <li>
              <Link href={"/ask"} className={styles.link}>
                ASK
              </Link>
            </li>
            <li>
              <Link href={"/hot_questions_list"} className={styles.link}>
                HOT QUESTIONS
              </Link>
            </li>
            <li>
              <Link href={"/polls"} className={styles.link}>
                POLLS
              </Link>
            </li>
            <li>
              <Link href={"/search"} className={styles.link}>
                SEARCH
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.mobileTrophyImg}>
          <div className={styles.trophyContainer}>
            <Image
              src={trophyImg}
              className={styles.logoImg}
              alt={"logo image"}
              fill
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
