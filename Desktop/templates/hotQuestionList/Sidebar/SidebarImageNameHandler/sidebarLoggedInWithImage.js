import Image from "next/image";
import styles from "./sidebarLoggedInWithImage.module.css";

export default function SidebarLoggedInWithImage(props) {
  return (
    <div className={styles.LoggedInDiv}>
      <p className={styles.sidebarquoteNotLoggedIn}>
        Let’s start something Big Together
      </p>
      <div className={styles.WithImageContainer}>
        <div className={styles.sidebarimg}>
          <Image
            src={props.ProfileImage}
            alt="Profile"
            className={styles.setInitialPositionTrue}
            fill={true}
          />
        </div>
      </div>
      <div className={styles.sidebarname}>
        <h3>{props.FirstName}</h3>
      </div>
      <div className={`${styles.flex} ${styles.sidebarreputation}`}>
        <h4 className={styles.sidebarreputationscount}>{props.reputation}</h4>
        <p className={styles.sidebartotalreputation}>total reputation</p>
      </div>
    </div>
  );
}
