import React, { useCallback, useState, useEffec } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import {
  RefreshToken,
  UpvoteCommentAnswer,
  DownvoteCommentAnswer,
  UpvoteCommentQuestion,
  DownvoteCommentQuestion,
} from "/components/constants/urls";
import Image from "next/image";
import styles from "/components/questionById/Comment/CommentCard.module.scss";
import profileImg from "/public/user.png";
import uparrow from "/public/images/questionById/uparrow.png";
import downarrow from "/public/images/questionById/downarrow.png";

function CommentCard({ commentData, QUUID, AUUID }) {
  // console.log(commentData)
  const router = useRouter();
  const [upvoteCount, setUpvoteCount] = useState(commentData?.UpvotesCount);
  const [downvoteCount, setDownvoteCount] = useState(
    commentData?.DownvotesCount
  );
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

  //---------------------------------------------------------------------------------------------
  const upvoteCommentHandler = async (accessToken) => {

    let url;
    if (AUUID && QUUID) {
      console.log('its a answer')
      url = `${UpvoteCommentAnswer}${commentData?.CUUID}/${AUUID}/${QUUID}/`;
    } else if (QUUID) {
      console.log('its a question')
      url = `${UpvoteCommentQuestion}${commentData?.CUUID}/${QUUID}/`;
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      setUpvoteCount(result.upvotes_count);
      setDownvoteCount(result.downvotes_count);
    }
    try {
      removeCookie("redirectRoute", { path: "/" });
      removeCookie("routeQuery", { path: "/" });
    } catch (e) {
      console.log(e);
    }
  };

  //---------------------------------------------------------------------------------------------

  const downvoteCommentHandler = async (accessToken) => {
    let url;
    if (AUUID && QUUID) {
      console.log('its a answer')
      url = `${DownvoteCommentAnswer}${commentData?.CUUID}/${AUUID}/${QUUID}/`;
    } else if (QUUID) {
      console.log('its a question')
      url = `${DownvoteCommentQuestion}${commentData?.CUUID}/${QUUID}/`;
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      setUpvoteCount(result.upvotes_count);
      setDownvoteCount(result.downvotes_count);
    }
    try {
      removeCookie("redirectRoute", { path: "/" });
      removeCookie("routeQuery", { path: "/" });
    } catch (e) {
      console.log(e);
    }
  };

  //---------------------------------------------------------------------------------------------

  const commentVoteHandler = useCallback(
    async (voteType) => {
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
        console.log("reached!!!!!", voteType);

        if (voteType === "upvote") {
          upvoteCommentHandler(accessToken);
        } else if (voteType === "downvote") {
          downvoteCommentHandler(accessToken);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [QUUID, AUUID, commentData?.CUUID]
  );

  return (
    <div className={styles.container}>
      <div className={styles.commentWrapper}>
        <div className={styles.user}>
          <figure>
            {/* <Image src={profileImg} className={styles.img} alt={""} fill /> */}
            {commentData.ProfileImage !== "" ? (
              <Image
                src={commentData.ProfileImage} 
                alt="" 
                className={styles.img} 
                width={28}
                height={28}
              />
            ) : (
              <div className={styles.emptyProfileImageDiv}>
                {commentData.FirstName.charAt(0).toUpperCase()}
              </div>
            )}
          </figure>
          <span>{`${commentData?.FirstName} ${commentData?.LastName}`}</span>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.comment}>
            <p>{commentData?.Description}</p>
          </div>
          <div className={styles.commentVotes}>
            <div className={styles.upvote}>
              <figure
                onClick={() => {
                  commentVoteHandler("upvote");
                }}
              >
                <Image
                  src={uparrow}
                  alt={"up arrow"}
                  className={styles.img}
                  fill
                />
              </figure>
              <span>{upvoteCount}</span>
            </div>
            <div className={styles.downvote}>
              <figure
                onClick={() => {
                  commentVoteHandler("downvote");
                }}
              >
                <Image
                  src={downarrow}
                  alt={"down arrow"}
                  className={styles.img}
                  fill
                />
              </figure>
              <span>{downvoteCount}</span>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.breakline} />
    </div>
  );
}

export default CommentCard;
