import styles from "./LeaderboardListItem.module.scss"

const LeaderboardListItem = (props) => {
  // console.log("rankp",props.Rank);
  const rank =props.Rank;
  const formattedRank = rank < 10 ? `0${rank}` : rank;
  return (
    <div className={styles.topContainer}>
      <div className={styles.leaderboardlistitem}>
        {props.Rank == 1 && (
          <div className={styles.leaderboardposition1}>
            <div className={styles.rank}>{formattedRank}</div>
            <div className={styles.underscore}>
              <div className={styles.dash}></div>
              <div className={styles.dash}></div>
              <div className={styles.dash}></div>
              <div className={styles.dash}></div>
            </div>
          </div>
        )}
        {props.Rank != 1 && (
          <div className={styles.leaderboardposition}>
            <div className={styles.underscore}>
              <div className={styles.dash}></div>
              <div className={styles.dash}></div>
              <div className={styles.dash}></div>
              <div className={styles.dash}></div>
            </div>
            <div className={styles.rank}>{formattedRank}</div>
            <div className={styles.underscore}>
              <div className={styles.dash}></div>
              <div className={styles.dash}></div>
              <div className={styles.dash}></div>
              <div className={styles.dash}></div>
            </div>
          </div>
        )}

        <div className={styles.leaderboardnamescore}>
          <div className={styles.leaderboardusername}>
            {props.FirstName} {props.LastName}
          </div>
          <div className={styles.leaderboardscore}>{props.Reputation}</div>
        </div>
      </div>
      <div className={styles.dashbig}></div>
    </div>
  );
};
export default LeaderboardListItem;
