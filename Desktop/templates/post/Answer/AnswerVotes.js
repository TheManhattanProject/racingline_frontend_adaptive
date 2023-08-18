import React, { useCallback, useState, useEffect, useMemo } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./AnswerVotes.module.scss";
import {
  RefreshToken,
  UpvoteAnswer,
  DownvoteAnswer,
} from "../../constants/urls";
import upvoteImage from "../../../public/images/questionById/upvote.png";
import downvoteImage from "../../../public/images/questionById/downvote.png";

function AnswerVotes({ upvotes, downvotes, QUUID, AUUID, createdAt }) {
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

  const [upVote, setUpVote] = useState(upvotes);
  const [downVote, setDownVote] = useState(downvotes);

  const timeElapsed = useMemo(() => {
    const currentTime = new Date();
    const epochTime = new Date(createdAt);
    const millisecondsSinceEpoch = currentTime - epochTime;
    const hoursSinceEpoch = millisecondsSinceEpoch / (1000 * 60 * 60);

    if (hoursSinceEpoch >= 24 * 365) {
      const yearsSinceEpoch = hoursSinceEpoch / 24 / 365;

      return { type: "year", timeElapsed: Math.floor(yearsSinceEpoch) };
    } else if (hoursSinceEpoch >= 24 * 30) {
      const monthsSinceEpoch = hoursSinceEpoch / 24;

      return { type: "month", timeElapsed: Math.floor(monthsSinceEpoch) };
    } else if (hoursSinceEpoch >= 24) {
      const daysSinceEpoch = hoursSinceEpoch / 24;

      return { type: "day", timeElapsed: Math.floor(daysSinceEpoch) };
    } else {
      return { type: "hour", timeElapsed: Math.floor(hoursSinceEpoch) };
    }
  }, [createdAt]);

  if (upVote < 0) {
    setUpVote(0);
  }
  if (downVote < 0) {
    setDownVote(0);
  }

  const upVoteAnswer = useCallback(async () => {
    try {
      var accessToken = cookies.accessToken;
      if (cookies.refreshToken === undefined) {
        setCookie("redirectRoute", router.pathname, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        setCookie("routeQuery", router.query, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        router.push("/login");
        return;
      }
      const accessTokenExpiryTime = new Date(cookies.accessTokenExpiresAt);
      const refreshokenExpiryTime = new Date(cookies.refreshTokenExpiresAt);
      var currentdate = new Date();
      if (refreshokenExpiryTime <= currentdate) {
        setCookie("redirectRoute", router.pathname, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        setCookie("routeQuery", router.query, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        router.push("/login");
        return;
      }
      if (accessTokenExpiryTime <= currentdate) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ refresh_token: cookies.refreshToken });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        const response = await fetch(RefreshToken, requestOptions);
        const result = await response.json();
        setCookie("accessToken", result.access_token, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        setCookie("accessTokenExpiresAt", result.access_token_expires_at, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        accessToken = result.access_token;
      }
      if (accessToken === "") {
        setCookie("redirectRoute", router.pathname, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        setCookie("routeQuery", router.query, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        router.push("/login");
      }

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${accessToken}`);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `${UpvoteAnswer}${AUUID}/${QUUID}/`,
        requestOptions
      );
      if (response.ok) {
        setUpVote((prev) => prev + 1);
        setDownVote((prev) => prev - 1);
        const result = await response.json();
        console.log(result);
      }
      try {
        removeCookie("redirectRoute", { path: "/" });
        removeCookie("routeQuery", { path: "/" });
      } catch (e) {
        console.log(e);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cookies, QUUID, AUUID]);

  const downVoteAnswer = useCallback(async () => {
    try {
      var accessToken = cookies.accessToken;
      if (cookies.refreshToken === undefined) {
        setCookie("redirectRoute", router.pathname, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        setCookie("routeQuery", router.query, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        router.push("/login");
        return;
      }
      const accessTokenExpiryTime = new Date(cookies.accessTokenExpiresAt);
      const refreshokenExpiryTime = new Date(cookies.refreshTokenExpiresAt);
      var currentdate = new Date();
      if (refreshokenExpiryTime <= currentdate) {
        setCookie("redirectRoute", router.pathname, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        setCookie("routeQuery", router.query, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        router.push("/login");
        return;
      }
      if (accessTokenExpiryTime <= currentdate) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ refresh_token: cookies.refreshToken });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        const response = await fetch(RefreshToken, requestOptions);
        const result = await response.json();
        setCookie("accessToken", result.access_token, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        setCookie("accessTokenExpiresAt", result.access_token_expires_at, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        accessToken = result.access_token;
      }
      if (accessToken === "") {
        setCookie("redirectRoute", router.pathname, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        setCookie("routeQuery", router.query, {
          path: "/",
          maxAge: 2592000,
          sameSite: true,
        });
        router.push("/login");
      }

      try {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${accessToken}`);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow",
        };

        const response = await fetch(
          `${DownvoteAnswer}${AUUID}/${QUUID}/`,
          requestOptions
        );
        if (response.ok) {
          const result = await response.json();

          setDownVote((prev) => prev + 1);
          setUpVote((prev) => prev - 1);

          console.log("downVote response", result);
        }
      } catch (e) {
        console.log(e);
      }

      try {
        removeCookie("redirectRoute", { path: "/" });
        removeCookie("routeQuery", { path: "/" });
      } catch (e) {
        console.log(e);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cookies, QUUID, AUUID]);

  const extractDayMonth = useMemo(() => {
    const month = createdAt.slice(5, 7);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthString = months[month - 1];
    const day = createdAt.slice(8, 10);
    const year = createdAt.slice(0, 4);
    return { monthString, day, year };
  }, [createdAt]);

  let timeData = "";
  if (timeElapsed.type === "year") {
    timeData = `${timeElapsed.timeElapsed} years ago`;
  } else if (timeElapsed.type === "month") {
    timeData = `${timeElapsed.timeElapsed} months ago`;
  } else if (timeElapsed.type === "day") {
    timeData = `${timeElapsed.timeElapsed} days ago`;
  } else if (timeElapsed.type === "hour") {
    timeData = `${timeElapsed.timeElapsed} hours ago`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.voteContainer}>
        <div className={styles.upvoteContainer}>
          <figure onClick={upVoteAnswer}>
            <Image
              src={upvoteImage}
              alt={"upvote"}
              className={styles.voteimg}
              fill
            />
          </figure>
          <span>{upVote}</span>
        </div>
        <div className={styles.downContainer}>
          <figure onClick={downVoteAnswer}>
            <Image
              src={downvoteImage}
              alt={"downvote"}
              className={styles.voteimg}
              fill
            />
          </figure>
          <span>{downVote}</span>
        </div>
      </div>
      <div className={styles.timepassed}>{`${extractDayMonth.day} ${extractDayMonth.monthString}
              ${extractDayMonth.year}
              `}</div>
    </div>
  );
}

export default AnswerVotes;
