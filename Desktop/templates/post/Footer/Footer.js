import React from "react";
import Image from "next/image";
import styles from "/components/questionById/Footer/Footer.module.scss";
import companyLogo from '/public/logo.png'

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.leftSection}>
        <div className={styles.upperMenu}>
          <div className={styles.title}>COMPANY</div>
          <div className={styles.menu}>
            <li>About Us</li>
            <li>Work with Us</li>
            <li>Contact Us</li>
            <li>Rules</li>
            <li>T&C</li>
          </div>
        </div>
        <div className={styles.lowerMenu}>
          <div className={styles.title}>PRODUCTS</div>
          <div className={styles.menu}>
            <li>xyz</li>
            <li>xyz</li>
            <li>xyz</li>
            <li>xyz</li>
            <li>xyz</li>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.companyLogo}>
          <Image src={companyLogo} alt={''} className={styles.logoImg} fill/>
        </div>
        <div className={styles.copyright}>
          <h6>© 2022 SHORTSQUEEZE PRIVATE LIMITED</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
