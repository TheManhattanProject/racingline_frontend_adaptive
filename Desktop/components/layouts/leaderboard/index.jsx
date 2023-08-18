import get from "@/lib/get";
import { Questionlt } from "@/lib/urls";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./Leaderboard.module.scss";
import LeaderboardListItem from "./LeaderboardListItem/LeaderboardListItem";

const Leaderboard = () => {
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [cookies] = useCookies([
    "accessToken",
    "refreshToken",
    "accessTokenExpiresAt",
    "refreshTokenExpiresAt",
  ]);

  useEffect(() => {
    const page = 1;
    const auth = false;
    const url = Questionlt
    get({ url, page, cookies, auth }).then(data => {
      const { res: { leaderboard } } = data;
      const OrderedList = leaderboard?.sort((a, b) => a.reputation - b.reputation) || [];
      setLeaderBoard(OrderedList)
    })
  }, []);

  return (
    <div className={styles.leaderboard}>
      <div className={styles.leaderboardImage}>
        <Image src="/dstatic/questions/leaderboard.svg" width={223} height={148} alt="leaderboardImage" />
      </div>
      <div className={styles.leaderboardText}>
        <p >LEADERBOARD</p>
      </div>
      <div className={styles.leaderboardlist}>
        {leaderBoard.length === 0
          ? <p className={styles.p}>Something went worng!</p>
          : leaderBoard?.reverse()
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
            })
        }
      </div>
    </div>
  );
};
export default Leaderboard;
