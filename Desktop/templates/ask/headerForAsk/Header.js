import styles from "./Header.module.scss";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.mobileNav}>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
