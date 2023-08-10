import React from "react";
import styles from "./Header.module.scss";
import Navbar from "../headerForAsk/Navbar";

function Header() {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.mobileNav}>
            <Navbar/>
        </div>
    </div>
  );
}

export default Header;
