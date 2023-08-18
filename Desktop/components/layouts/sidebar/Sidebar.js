import useAuthUser from "@/hooks/useAuthUser";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import OptionsList from "./OptionList/OptionsList";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [isLoggedIn, { first_name, last_name, profile_img, reputation }] = useAuthUser();
  const pathname = usePathname()
  return (
    <div className={`thesidebar ${styles.sidebar}`}>
      <Image
        className={styles.sidebarquoteNotLoggedIn}
        src="/dstatic/hotquestions/logo.png"
        fill
        priority
        alt="racingline-logo"
      />
      <hr className={styles.hr} />
      <div className={styles.detailsWrapper}>
        {isLoggedIn ? (
          <p className={styles.name}>Hi, {first_name}</p>
        ) : (
          <p className={styles.name}>Hi, Racer</p>
        )}

        <div className={styles.subWrapper}>
          {isLoggedIn ? (
            <>
              <p>Your current reputation is at <b>{reputation}</b></p>
              <p>points.</p>
            </>
          ) : (
            <>
              <p className={styles.infoText}>
                Looking to contribute?
                <br />
              </p>
              <Link href="/login" style={{ textDecoration: "none" }}>
                <h2 className={styles.pointsText}>
                  Log In / Sign Up
                  <br />
                </h2>
              </Link>
            </>
          )}
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.listitems}>
        <OptionsList page={pathname} />
      </div>
    </div>
  );
};

export default Sidebar; 