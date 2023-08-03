
import useAuthUser from "@/hooks/useAuthUser";
import Link from "next/link";
import styles from "./Header.module.scss";
import img1 from "../../../public/dstatic/home/Racingline.png"
import Image from "next/image";
const Header = () => {
  const [isLoggedIn, { first_name, last_name, profile_img }] = useAuthUser();
  return (
    <div className={styles.header}>
      <Image src={img1} alt="" className={styles.logo} />
      <div className={styles.navItems}>
        <Link href="/question_list" className={styles.navContainer}>
          {/* <img src="../../../public/dstatic/home/questions.png" alt="" className={styles.navLogo} /> */}
          <span className={styles.navText}>Questions</span>
        </Link>
        <Link href="/hot_questions_list" className={styles.navContainer}>
          {/* <img src="../../../public/dstatic/home/hotquestions.png" alt="" className={styles.navLogo} /> */}
          <span className={styles.navText}>Hot Questions</span>
        </Link>
        <Link href="/ask" className={styles.navContainer}>
          {/* <img src="../../../public/dstatic/home/ask.png" alt="" className={styles.navLogo} /> */}
          <span className={styles.navText}>Ask</span>
        </Link>
        <Link href="/polls" className={styles.navContainer}>
          {/* <img src="../../../public/dstatic/home/poll.png" alt="" className={styles.navLogo} /> */}
          <span className={styles.navText}>Polls</span>
        </Link>
        <Link href="/search" className={styles.navContainer}>
          {/* <img src="../../../public/dstatic/home/search.png" alt="" className={styles.navLogo} /> */}
          <span className={styles.navText}>Search</span>
        </Link>
        {isLoggedIn ? <Link href="/profile" className={styles.navContainer2}>
          {/* <img src="../../../public/dstatic/home/search.png" alt="" className={styles.navLogo} /> */}
          <span className={styles.navText2}>View profile</span>
        </Link> : <Link href="/register" className={styles.navContainer2}>
          {/* <img src="../../../public/dstatic/home/search.png" alt="" className={styles.navLogo} /> */}
          <span className={styles.navText2}>signup</span>
        </Link>}
      </div>
    </div>
  );
};
export default Header;

