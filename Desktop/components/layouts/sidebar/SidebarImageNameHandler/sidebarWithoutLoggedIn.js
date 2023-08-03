import Image from 'next/image';
import Link from 'next/link';
import styles from './sidebarWithoutLoggedIn.module.css';
import close from '/public/mstatic/profile/close.png';
export default function SidebarWithoutLoggedIn({
  menu,
  onClose,
  ProfileImage,
  reputation,
  FirstName,
}) {
  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.closeContainer} onClick={(e) => onClose()}>
          <Image
            src={close}
            className={styles.closeImg}
            width={20}
            height={20}
            alt="close"
          />
        </div>
      </div>
      <div className={styles.NotLoggedInDiv}>
        <div className={styles.infoContainer}>
          <h3 className={styles.nameText}>
            Hi, Racer
            <br />
          </h3>
          <p className={styles.infoText}>
            Looking to contribute?
            <br />
          </p>
          <div className={styles.topBorder}></div>

          <div className={styles.loginContainer}>
            <Link href="/login" className={styles.loginText}>
              <div className={styles.pointsText}>
                Log In/Sign Up
                <br />
              </div>
            </Link>
          </div>
          <div className={styles.bottomBorder}></div>
        </div>
      </div>
    </>
  );
}
