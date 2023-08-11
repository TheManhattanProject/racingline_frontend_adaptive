import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.footer}>
        <div className={styles.infoContainer}>
          <div className={styles.subContainer}>
            <div className={styles.heading}>COMPANY</div>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.heading}>PRODUCTS</div>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
          </div>
        </div>
        <div className={styles.racinglineLogoContainer}>
          <div className={styles.racingLineLogo}>
            <Image
              src="/static/questions/Racingline logo-large.svg"
              fill={true}
              alt="racingLineLogo"
              className={styles.setInitialPositionTrue}
            />
          </div>
          <p>Copyright 2023</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
