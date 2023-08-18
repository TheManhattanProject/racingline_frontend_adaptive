import post from "@/lib/post";
import { VotePoll } from "@/lib/urls";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactMarkdown from "react-markdown";
import Tag from "../Tag/Tag";
import DashedBorder from "../ui/DashedBorder";
import CardHeader from "./CardHeader";
import Option from "./Option";
import styles from "./PollsCard.module.scss";
function PollsCard({
  FirstName: first_name,
  LastName: last_name,
  Reputation: reputation,
  CreatedAt: created_at,
  ProfileImage: profile_image,
  Tags: tags,
  Title: title,
  Description: description,
  Choices: choices,
  puuid,
}) {
  const [cookies] = useCookies([
    "token",
    "firstName",
    "lastName",
    "profileImage",
    "accessToken",
    "refreshToken",
    "accessTokenExpiresAt",
    "refreshTokenExpiresAt",
    "redirectRoute",
    "routeQuery",
  ]);
  const [cho, setcho] = useState([]);
  const [totalVotes, settotalVotes] = useState(0);
  const [selectedPoll, setselectedPoll] = useState("");
  const [dis, setDis] = useState(false);
  const [alrdyVoted, setalrdyVoted] = useState(false);

  useEffect(() => {
    const obj = [];
    choices &&
      Object.keys(choices).length > 0 &&
      Object.keys(choices).forEach((key, i) => obj.push(choices[key]));
    let count = 0;
    obj.map((item) => (count += item.vote_count));
    settotalVotes(count);
    setcho(obj);
  }, [choices]);

  const onChoicesHandler = async (cuuid) => {
    if (dis) return;
    setDis(true);
    const url = `${VotePoll}${puuid}/${cuuid}`;
    const body = null;

    post({ url, cookies, body })
      .then(({ suc, res }) => {
        if (suc) {
          const obj = [];
          const choices = res.choices;
          choices &&
            Object.keys(choices).length > 0 &&
            Object.keys(choices).forEach((key, i) => obj.push(choices[key]));
          let count = 0;
          obj.map((item) => (count += item.vote_count));
          setselectedPoll(cuuid);
          settotalVotes(count);
          setcho(obj);
        } else {
          setalrdyVoted(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    setDis(false);
  };
  console.log(first_name, last_name, reputation, created_at, profile_image);
  return (
    <div className={styles.cardContainer}>
      <CardHeader data={{ first_name, last_name, reputation, created_at, profile_image }} />
      <hr className={styles.breakline} />
      <div className={styles.cardContent}>
        <div className={styles.tit}>
          <ReactMarkdown>{title ?? ""}</ReactMarkdown>
        </div>
        <div className={styles.descp}>
          <ReactMarkdown>{description ?? ""}</ReactMarkdown>
        </div>
        <div className={styles.pollsContainer}>
          {cho &&
            cho.length > 0 &&
            cho.map((item, i) => (
              <Option
                key={i}
                {...item}
                count={totalVotes}
                selectedPoll={selectedPoll}
                onChoicesHandler={onChoicesHandler}
                dis={dis}
              />
            ))}
        </div>
        <Tag tags={tags} />
      </div>
      <DashedBorder />
      {!(
        cookies.refreshTokenExpiresAt > new Date() ||
        cookies.refreshTokenExpiresAt === "undefined" ||
        cookies.refreshToken === undefined
      ) &&
        alrdyVoted && (
          <div className={styles.alrdyVoted}>
            <div className={styles.alrdyVotedbox}>
              <div>You Already Voted it!</div>
              <span onClick={(e) => setalrdyVoted(false)}>X</span>
            </div>
          </div>
        )}
    </div>
  );
}

export default PollsCard;
