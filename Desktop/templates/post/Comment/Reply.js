import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  CreateAnswerComment,
  CreateCommentQuestion,
  RefreshToken,
} from "/components/constants/urls";
import styles from "/components/questionById/Comment/Reply.module.scss";
import sendarrowImg from "/public/images/questionById/sendarrow.png";
import userImg from "/static/question/defaultProfile.png";

function Reply({ isListEmpty, QUUID, AUUID, AddComment, isListFull }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [queCommentText, setQueCommentText] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [profileImg, setProfileImg] = useState("");
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
    "commentText",
    "QUUID",
    "AUUID",
  ]);

  //Handle Question Comments-----------------------------------------------------------------------

  const questionCommentHandler = async (cookies, requestOptions) => {
    setLoading(true);
    const response = await fetch(
      `${CreateCommentQuestion}${QUUID}/`,
      requestOptions
    );
    const responseJson = await response.json();
    setLoading(false);
    console.log(responseJson);

    //adding to original list
    AddComment((prev) => [
      ...prev,
      {
        CreatedAt: new Date().toISOString(),
        CUUID: responseJson.comment_id,
        FirstName: cookies.firstName,
        LastName: cookies.lastName,
        ProfileImage: cookies.profileImage,
        Description: queCommentText,
        UpvotesCount: 0,
        DownvotesCount: 0,
      },
    ]);

    console.log("it worked");
    try {
      setQueCommentText("")
      removeCookie("redirectRoute", { path: "/" });
      removeCookie("routeQuery", { path: "/" });
      removeCookie("commentText", { path: "/" });
      removeCookie("QUUID", { path: "/" });
      removeCookie("AUUID", { path: "/" });
    } catch (e) {
      console.log(e);
    }
  };

  //Handle Answer Comments-------------------------------------------------------------------------

  const answerCommentHandler = async (cookies, requestOptions) => {
    setLoading(true)
    const response = await fetch(
      `${CreateAnswerComment}/${AUUID}/${QUUID}/`,
      requestOptions
    );
    const result = await response.json();
    setLoading(false);
    console.log(result);
    console.log(commentText);
    //adding to original list
    AddComment((prev) => [
      ...prev,
      {
        CreatedAt: new Date().toISOString(),
        CUUID: result.comment_id,
        FirstName: cookies.firstName,
        LastName: cookies.lastName,
        ProfileImage: cookies.profileImage,
        Description: commentText,
        UpvotesCount: 0,
        DownvotesCount: 0,
      },
    ]);
    console.log("its Answer Comment");
    try {
      setCommentText("")
      removeCookie("redirectRoute", { path: "/" });
      removeCookie("routeQuery", { path: "/" });
      removeCookie("commentText", { path: "/" });
      removeCookie("QUUID", { path: "/" });
      removeCookie("AUUID", { path: "/" });
    } catch (e) {
      console.log(e);
    }
  };

  // Handler Adding a Comment--------------------------------------------------------------------

  const handleAddComment = useCallback(async () => {
    if (QUUID && AUUID) {
      if (!commentText) return;
    } else {
      if (!queCommentText) return;
    }
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
      setCookie("commentText", QUUID && AUUID ? commentText : queCommentText, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("QUUID", QUUID ? QUUID : "", {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("AUUID", AUUID ? AUUID : "", {
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
      setCookie("commentText", QUUID && AUUID ? commentText : queCommentText, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("QUUID", QUUID ? QUUID : "", {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("AUUID", AUUID ? AUUID : "", {
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
      setCookie("commentText", QUUID && AUUID ? commentText : queCommentText, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("QUUID", QUUID ? QUUID : "", {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      setCookie("AUUID", AUUID ? AUUID : "", {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
      router.push("/login");
    }
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      comment: QUUID && AUUID ? commentText : queCommentText,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    if (AUUID && QUUID) {
      console.log("Its AUUID");
      await answerCommentHandler(cookies, requestOptions);
      return;
    } else if (QUUID) {
      console.log("Its QUUID");
      await questionCommentHandler(cookies, requestOptions);
      return;
    }
  }, [cookies, AddComment, QUUID, commentText, queCommentText]);

  useEffect(() => {
    console.log(QUUID && AUUID ? true : false)
    if (QUUID == cookies.QUUID && AUUID == cookies.AUUID) {
      setCommentText(cookies.commentText);
    } else if (QUUID == cookies.QUUID && cookies.AUUID == "") {
      setQueCommentText(cookies.commentText);
    } else {
      setCommentText("");
    }
  }, [])

  useEffect(() => {
    var currentdate = new Date();
    const refreshTokenExpiryTime = new Date(cookies.refreshTokenExpiresAt);
    if (cookies.refreshToken === undefined || cookies.refreshToken === "undefined" || refreshTokenExpiryTime <= currentdate) {
      setisLoggedIn(false);
      setFirstName("Racer");
    } else {
      setisLoggedIn(true);
    }
    if (cookies.firstName !== "") {
      setFirstName(cookies.firstName);
    }
    if (cookies.lastName !== "") {
      setLastName(cookies.lastName);
    }
  }, [cookies])

  return (
    <div className={styles.replyContainer}>
      {isListEmpty && !isListFull && <hr className={styles.breakline1} />}
      <div className={styles.mainArea}>
        <div className={styles.user}>
          <figure>
            {!isLoggedIn &&
              <Image src={userImg} alt={"user"} className={styles.img} fill />
            }
            {isLoggedIn &&
              (profileImg !== "" ? (
                <Image
                  src={profileImg}
                  alt=""
                  className={styles.img}
                  width={28}
                  height={28}
                />
              ) : (
                <div className={styles.emptyProfileImageDiv}>
                  {firstName.charAt(0).toUpperCase()}
                </div>
              ))}
          </figure>
          {!isLoggedIn ? (
            <span>Racer</span>
          ) : (
            <span>{firstName} {lastName}</span>
          )}

        </div>
        <div className={styles.inputArea}>
          {/* <input
            type="text"
            placeholder="Add a Comment..."
            value={commentText}
            onChange={(e) => {
              setCommentText(e.target.value);
            }}
            
          /> */}
          <form onSubmit={handleAddComment}>
            <div>

              <textarea
                value={QUUID && AUUID ? commentText : queCommentText}
                rows="1"
                onChange={(e) => {
                  QUUID && AUUID ?
                    setCommentText(e.target.value)
                    :
                    setQueCommentText(e.target.value);
                }}
                placeholder="Add a Comment..."
                required />
              <button disabled={loading}>
                {loading
                  ? <img src="/static/question/loaderSend.svg" />
                  :
                  <Image
                    src={sendarrowImg}
                    alt={"send"}
                    className={styles.img}
                    fill
                  />
                }
              </button>

            </div>
          </form>
        </div>
      </div>
      <hr className={styles.breakline2} />
    </div>
  );
}

export default Reply;
