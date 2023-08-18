import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";

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
          <div className={styles.logoImg}>
            <Image
              src="/dstatic/headerForAsk/logo.png"
              alt={"logo image"}
              fill={true}
              className={styles.setPositionInitalTrue}
            />
          </div>
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
            <div className={styles.logoImg}>
              <Image
                src="/dstatic/headerForAsk/trophy.png"
                alt={"logo image"}
                fill={true}
                className={styles.setPositionInitalTrue}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
