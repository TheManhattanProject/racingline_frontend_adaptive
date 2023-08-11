import styles from "./addCommentQuestion.module.css";
import { useRef, useCallback } from "react";
import { useCookies } from "react-cookie";
import {
  CreateCommentQuestion,
  RefreshToken,
} from "../../../../lib/urls";
import { useRouter } from "next/router";
import Image from "next/image";

export default function AddCommentQuestion(props) {
  const router = useRouter();
  const commentRef = useRef();
  const [cookies, setCookie, removeCookie] = useCookies([
    "firstName",
    "lastName",
    "profileImage",
    "accessToken",
    "refreshToken",
    "accessTokenExpiresAt",
    "refreshTokenExpiresAt",
  ]);

  const handleAddComment = useCallback(async () => {
    var accessToken = cookies.accessToken;
    if (cookies.refreshToken === undefined) {
      router.push("login");
      return;
    }
    const accessTokenExpiryTime = new Date(cookies.accessTokenExpiresAt);
    const refreshokenExpiryTime = new Date(cookies.refreshTokenExpiresAt);
    var currentdate = new Date();
    if (refreshokenExpiryTime <= currentdate) {
      router.push("login");
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
      router.push("login");
    }
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      comment: commentRef.current.value,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const responseT = await fetch(
      `${CreateCommentQuestion}${props.QUUID}/`,
      requestOptions
    );
    const responseJson = await responseT.json();
    props.AddComment((prev) => [
      ...prev,
      {
        CreatedAt: new Date().toISOString(),
        CUUID: responseJson.comment_id,
        FirstName: cookies.firstName,
        LastName: cookies.lastName,
        ProfileImage: cookies.profileImage,
        Description: commentRef.current.value,
        upvotes_count: 0,
        downvotes_count: 0,
      },
    ]);
  }, [cookies, props.AddComment, props.QUUID, commentRef]);

  return (
    <div className={styles.newcommentcontainer}>
      <div className={styles.newcomment}>
        <input
          type="text"
          className={styles.addCommentInput}
          placeholder="Add a comment...."
          ref={commentRef}
        />
        <div className={styles.addCommentButton}>
          <Image
            src="/dstatic/hotquestions/send.png"
            alt=""
            className={styles.setInitialPositionTrue}
            fill={true}
            onClick={handleAddComment}
          />
        </div>
      </div>
    </div>
  );
}
