import styles from "./footer.module.css";
import Image from "next/image";
import img1 from "/public/dstatic/questions/Racingline logo-large.svg";

const Footer = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.track}></div>
      <div className={styles.footer}>
        <div className={styles.infoContainer}>
          <div className={styles.subContainer1}>
            <div className={styles.heading}>COMPANY</div>
            <p>About Us</p>
            <p>Work with Us</p>
            <p>Contact Us</p>
            <p>Rules</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          <div className={styles.subContainer2}>
            <div className={styles.heading}>PRODUCTS</div>
            <p>Validaet</p>
            <p>Podiumpe</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
            <p>About Us</p>
          </div>
        </div>
        <div className={styles.racinglineLogoContainer}>
          <Image
            src={img1}
            className={styles.racingLineLogo}
            alt="racingLineLogo"
          />
          <p>Copyright 2023</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
