import React, { useCallback } from "react";
import Image from "next/image";
import { useCookies } from "react-cookie";
import { useRouter } from "next/Router";
import { RefreshToken, BookmarkAnswer } from "/components/constants/urls";
import { useState } from "react";
import Snackbar from "/components/questionById/Snackbar/Snackbar";
import styles from "/components/questionById/Answer/Answer.module.scss";
import DashedBorder from "/components/questionById/UI/DashedBorder";
import userImg from "../../../public/user.png";
import AnswerVotes from "/components/questionById/Answer/AnswerVotes";
import bookmarkImg from "/static/question/bookmark2.png";
import ReactMarkdown from "react-markdown";

function Answer({ answer, AUUID, QUUID, createdAt }) {
  // console.log(answer?.Description);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const openChangeHandler = useCallback((props) => {
    setShowSnackbar(props);
  }, []);
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

  const bookmarkAns = useCallback(async () => {
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
        `${BookmarkAnswer}${AUUID}/`,
        requestOptions
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setShowSnackbar(true);
        // alert('answer bookmarked')
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
  }, [cookies, AUUID]);

  return (
    <div className={styles.mainContainer}>
      <DashedBorder />
      <div className={styles.answerContainer}>
        <div className={styles.answerHeader}>
          <div className={styles.user}>
            <figure>
              {/* <Image src={userImg} alt={"user"} className={styles.img} fill /> */}
              {answer?.ProfileImage !== "" ? (
                <Image
                  src={answer?.ProfileImage}
                  alt=""
                  className={styles.userImg}
                  width={28}
                  height={28}
                />
              ) : (
                <div className={styles.emptyProfileImageDiv}>
                  {answer?.FirstName.charAt(0).toUpperCase()}
                </div>
              )}
            </figure>
            <span>{`${answer?.FirstName} ${answer?.LastName}`}</span>
          </div>
          <div className={styles.bookmarkContainer} onClick={bookmarkAns}>
            <Image
              src={bookmarkImg}
              alt={"bookmark"}
              className={styles.img}
              fill
            />
          </div>
        </div>
        <div className={styles.answer}>
          <ReactMarkdown className={styles.reactmarkdown}>
            {answer?.Description}
          </ReactMarkdown>
          <div className={styles.votes}>
            <AnswerVotes
              upvotes={answer?.UpvotesCount}
              downvotes={answer?.DownvotesCount}
              AUUID={AUUID}
              QUUID={QUUID}
              createdAt={createdAt}
            />
          </div>
        </div>
      </div>
      <DashedBorder />
      {showSnackbar ? (
        <div className={styles.snackbar}>
          <Snackbar
            open={showSnackbar}
            openChangeHandler={openChangeHandler}
            message={"Answer added to your bookmarks"}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Answer;
