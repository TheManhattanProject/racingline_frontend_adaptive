import Image from "next/image";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <figure
        className={styles.backArrow}
        onClick={() => {
          history.back();
        }}
      >
        <Image alt={"Back Arrow"} src="/dstatic/auth/arrowLeft.png" className={styles.img} fill />
      </figure>
      <figure className={styles.logo}>
        <Image
          src="/dstatic/home/logo.png"
          alt={"RacingLine Logo"}
          className={styles.img}
          fill
        />
      </figure>
    </header>
  );
}

export default Header;
