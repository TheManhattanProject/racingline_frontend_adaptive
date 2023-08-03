 
import Link from 'next/link';
import styles from './sidebarWithoutLoggedIn.module.css'; 
export default function SidebarWithoutLoggedIn( ) {
  return ( 
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
  );
}
