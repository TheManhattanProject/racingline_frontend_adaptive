import styles from "./sidebarWithoutLoggedIn.module.css";
import Image from 'next/image'

export default function SidebarWithoutLoggedIn(props) {
  return (
    <div className={styles.NotLoggedInDiv}>
      <div className={styles.racingLine}>
      <Image
        src="/static/questions/Racingline logo.svg"
        alt="Racing Line Logo"
        className={styles.setInitialPositionTrue}
        height={104}
        width={335}
        fill={true}
      />
      </div>
      
    
      <div className={styles.infoContainer}>
      <h3 className={styles.nameText}>Hi, Racer<br/></h3>
      {/* <p className={styles.infoText}>Your current reputation is at<br/></p> */}
      <h2 className={styles.pointsText}>LOG IN<br/></h2>
      {/* <p className={styles.infoText}>points</p> */}
      {/* <hr className={styles.longDash}></hr> */}
      </div>
    </div>
  );
}
