import { DownvoteQuestion, UpvoteQuestion } from "@/lib/urls";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./Vote.module.scss";

function Votes({ upvote, downvote, QUUID }) {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies([
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
  const [upVoteNumber, setUpVoteNumber] = useState(upvote);
  const [downVoteNumber, setDownVoteNumber] = useState(downvote);

  const upVoteHandler = async () => {
    const url = `${UpvoteQuestion}${QUUID}/`;
    const body = null;
    post({ url, cookies, body })
      .then(({ suc, res }) => {
        if (suc) {
          setUpVoteNumber(res.upvotes_count);
          setDownVoteNumber(res.downvotes_count);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const downVoteHandler = async () => {
    const url = `${DownvoteQuestion}${QUUID}/`;
    const body = null;
    post({ url, cookies, body })
      .then(({ suc, res }) => {
        if (suc) {
          setUpVoteNumber(res.upvotes_count);
          setDownVoteNumber(res.downvotes_count);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const voteHandler = useCallback(
    async (voteTpe) => {
      if (voteTpe === "upvote") {
        upVoteHandler();
      } else if (voteTpe === "downvote") {
        downVoteHandler();
      }
    },
    [cookies, QUUID]
  );

  return (
    <div className={styles.voteContainer}>
      <div className={styles.upvoteContainer}>
        <figure
          onClick={() => {
            voteHandler("upvote");
          }}
        >
          <Image
            src="/dstatic/questionById/upvote.png"
            alt={"upvote"}
            className={styles.voteimg}
            fill
          />
        </figure>
        <span>{upVoteNumber}</span>
      </div>
      <div className={styles.downContainer}>
        <figure
          onClick={() => {
            voteHandler("downvote");
          }}
        >
          <Image
            src="/dstatic/questionById/downvote.png"
            alt={"downvote"}
            className={styles.voteimg}
            fill
          />
        </figure>
        <span>{downVoteNumber}</span>
      </div>
    </div>
  );
}

export default Votes;
