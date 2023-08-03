import Link from 'next/link';
import styles from './sidebarLoggedInWithoutImage.module.css';
import Imagetag from '/components/ui/image';
import close from '/public/mstatic/profile/close.png';
export default function SidebarLoggedInWithoutImage({
  menu,
  onClose,
  FirstName,
  reputation,
}) {
  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.closeContainer} onClick={(e) => onClose()}>
          <Imagetag
            src={close}
            className={styles.closeImg}
            width={20}
            height={20}
            alt="close"
          />
        </div>
      </div>
      <div className={styles.LoggedInDiv}>
        <Link href={`/profile`} style={{ textDecoration: 'none' }}>
          <div className={styles.infoContainer}>
            <h3 className={styles.nameText}>
              Hi, {FirstName}
              <br />
            </h3>
            <div className={styles.topBorder}></div>
            <p className={styles.infoText}>
              Your current reputation is at
              <br />
            </p>
            <div>
              <p className={styles.sidebarreputationscount}>{reputation}</p>
            </div>
            <p className={styles.infoText2}>
              points.
              <br />
            </p>
            <div className={styles.bottomBorder}></div>
          </div>
        </Link>
        {/* <p className={styles.sidebarquoteNotLoggedIn}>
        Let’s start something Big Together
      </p>
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
      </div> */}
      </div>
    </>
  );
}
