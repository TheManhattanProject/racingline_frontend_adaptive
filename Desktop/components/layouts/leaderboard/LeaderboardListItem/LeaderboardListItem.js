import styles from "./LeaderboardListItem.module.scss"

const LeaderboardListItem = ({ Rank, FirstName, LastName, Reputation }) => {
  const formattedRank = Rank < 10 ? `0${Rank}` : Rank;
  return (
    <div className={styles.topContainer}>
      <div className={styles.leaderboardlistitem}>
        {Rank == 1 && (
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
        {Rank != 1 && (
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
            {FirstName} {LastName}
          </div>
          <div className={styles.leaderboardscore}>{Reputation}</div>
        </div>
      </div>
      <div className={styles.dashbig}></div>
    </div>
  );
};
export default LeaderboardListItem;
