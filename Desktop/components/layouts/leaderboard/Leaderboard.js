import styles from "./Leaderboard.module.scss";
import LeaderboardListItem from "./LeaderboardListItem/LeaderboardListItem"
import { useMemo } from "react";
import Image from 'next/image';

const Leaderboard = ({LeaderArray: {leaderBoard}}) => { 
  const OrderedList = useMemo(() => { return leaderBoard.sort((a, b) => a.reputation - b.reputation)}, [leaderBoard])
  return (
    <div className={styles.leaderboard}>
      <div className={styles.leaderboardImage}>
        <Image src="/dstatic/questions/leaderboard.svg" width={223} height={148} alt="leaderboardImage" />
      </div>
      <div className={styles.leaderboardText}>
        <p>LEADERBOARD</p>
      </div>
      <div className={styles.leaderboardlist}>
        {OrderedList?.reverse()
          ?.map((data, index) => {
            return (
              <LeaderboardListItem
                key={data.Rank}
                Rank={index + 1}
                FirstName={data.first_name}
                LastName={data.last_name}
                Reputation={data.reputation}
                ProfileImage={data.profile_image}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Leaderboard;
