import styles from "./Leaderboard.module.scss";
import LeaderboardListItem from "./LeaderboardListItem/LeaderboardListItem";
import Image from "next/image";
import { useMemo } from "react";

const Leaderboard = (props) => {
  console.log(props.LeaderArray.leaderBoard);
  console.log("hey");

  const OrderedList = useMemo(() => {
    console.log(props.LeaderArray);
    return props?.LeaderArray?.leaderBoard?.sort(
      (a, b) => a.reputation - b.reputation
    );
  }, [props]);

  return (
    <div className={styles.leaderboard}>
      <div className={styles.leaderboardImage}>
        <div>
          <Image
            src="/dstatic/questions/leaderboard.svg"
            width={223}
            height={148}
            alt="leaderboardImage"
            className={styles.setInitialPositionTrue}
            fill={true}
          />
        </div>
      </div>
      <div className={styles.leaderboardText}>
        <p>LEADERBOARD</p>
      </div>
      <div className={styles.leaderboardlist}>
        {OrderedList?.reverse()?.map((data, index) => {
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
