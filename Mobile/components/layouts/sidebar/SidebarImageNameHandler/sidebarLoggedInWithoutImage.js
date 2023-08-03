import Link from 'next/link';
import styles from './sidebarLoggedInWithoutImage.module.css'; 
export default function SidebarLoggedInWithoutImage({
  FirstName,
  reputation,
}) {
  return ( 
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
      </div> 
  );
}
