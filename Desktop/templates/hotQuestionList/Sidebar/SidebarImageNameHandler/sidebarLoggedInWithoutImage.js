import styles from "./sidebarLoggedInWithoutImage.module.css";
import Image from "next/image";

export default function SidebarLoggedInWithoutImage(props) {
  return (
    <div className={styles.LoggedInDiv}>
      <div className={styles.sidebarquoteNotLoggedIn}>
      <Image
        className={styles.setInitialPositionTrue}
        src="/dstatic/hotquestions/logo.png"
        width={335}
        height={100}
        fill={true}
      />
      </div>
      <div className={styles.WithoutImageContainer}>
        <div className={styles.withoutProfilePicture}>
          <p>{props.FirstName.charAt(0).toUpperCase()}</p>
        </div>
      </div>
      <div className={styles.sidebarname}>
        <h3>{props.FirstName}</h3>
      </div>
      <div className={`${styles.flex} ${styles.sidebarreputation}`}>
        <div className={styles.sidebarreputationscount}>{props.reputation}</div>
        <p className={styles.sidebartotalreputation}>total reputation</p>
      </div>
    </div>
  );
}
