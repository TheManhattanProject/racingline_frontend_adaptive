import millify from "millify";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { useCookies } from "react-cookie";

import post from "@/lib/post";
import { BookmarkQuestion } from "@/lib/urls";
import { dateToString } from "@/lib/utils";
import Snackbar from "../Snackbar/Snackbar";
import styles from "./DetailsRow.module.scss";


function DetailsRow({ views, firstName, lastName, createdAt, QUUID, profileImage }) {
  const view = views;
  const [showSnackbar, setShowSnackbar] = useState(false);

  const openChangeHandler = useCallback((props) => {
    setShowSnackbar(props);
  }, []);

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

  const image = useMemo(() => {
    if (profileImage !== "") {
      return (
        <div className={styles.profile_picture}>
          <Image
            className={styles.userImg}
            src={profileImage}
            alt={`Profile picture of ${firstName}`}
          />
        </div>
      );
    }
    return (
      <div className={styles.emptyProfileImageDiv}>
        <p>{firstName?.charAt(0)?.toUpperCase()}</p>
      </div>
    );
  }, [profileImage]);

  const timeElapsed = useMemo(() => {
    const time = dateToString(createdAt);
    return time;
  }, [createdAt]);

  const bookmarkQue = useCallback(async () => {
    const url = `${BookmarkQuestion}${QUUID}/`;
    const body = null;

    post({ url, cookies, body })
      .then(({ suc, res }) => {
        if (suc) {
          setShowSnackbar(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [cookies, QUUID]);

  return (
    <div className={styles.detailsRow}>
      <div className={styles.userImageWrapper}>
        <figure>
          {image}
        </figure>
        <span>{`${firstName} ${lastName}`}</span>
      </div>
      <div className={styles.questionStatsWrapper}>
        <div className={styles.whenPosted}>
          <div className={styles.flexContainer}>
            <Image src="/dstatic/question/time.png" fill className={styles.userImg} alt={"timer"} />
          </div>
          <div className={styles.flexContainer}><span>{timeElapsed}</span></div>
        </div>
        <div className={styles.viewCount}>
          <div className={styles.flexContainer} >
            <Image
              src="/dstatic/question/eye.png" fill
              className={styles.userImg}
              alt={"view count"}

            />
          </div>
          <div className={styles.flexContainer}><span>{millify(view)} views</span></div>
        </div>
        <div className={styles.bookmark} onClick={bookmarkQue}>
          <div className={styles.flexContainer}>
            <Image
              src="/dstatic/question/bookmark2.png"
              className={styles.bookmarkImg}
              alt={"bookmark"}
            />
          </div>
          <div className={styles.flexContainer}><span>bookmark</span></div>
        </div>
      </div>
      {showSnackbar ?
        <div className={styles.snackbar}>
          <Snackbar
            open={showSnackbar}
            openChangeHandler={openChangeHandler}
            message={"Question added to your bookmarks"}
          />
        </div>

        :

        <></>
      }
    </div>
  );
}

export default DetailsRow;
