import Image from "next/image";
import styles from "./Comment.module.css";
import { useMemo } from "react";
// import { SubTitle } from "chart.js";

const Comment = (props) => {
  const extractDayMonth = useMemo(() => {
    const month = props.Comment.CreatedAt.slice(5, 7);
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
    const day = props.Comment.CreatedAt.slice(8, 10);
    const year = props.Comment.CreatedAt.slice(0, 4);
    return { monthString, day, year };
  }, [props.Comment.CreatedAt]);

  return (
    <div className={styles.comment}>
      <div className={styles.namediv}>
        {props.Comment.ProfileImage !== "" ? (
          <div className={styles.photo}>
            <Image
              src={props.Comment.ProfileImage}
              alt=""
              className={styles.setInitialPositionTrue}
              fill={true}
            />
          </div>
        ) : (
          <div className={styles.emptyProfileImageDiv}>
            {props.Comment.FirstName.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className={styles.name}>{props.Comment.FirstName}</p>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.text}>{props.Comment.Description}</h1>
        <div className={styles.footer}>
          <div className={styles.footeritem}>
            <div>
              <Image
                src="/dstatic/hotquestions/upvote.png"
                alt=""
                className={styles.setInitialPositionTrue}
                fill={true}
              />
            </div>
            <p className={styles.count}>{props.Comment.upvotes_count}</p>
          </div>
          <div className={styles.footeritems}>
            <div>
              <Image
                src="/dstatic/hotquestions/downvote.png"
                alt=""
                className={styles.setInitialPositionTrue}
                fill={true}
              />
            </div>
            <p className={styles.count}>{props.Comment.downvotes_count}</p>
          </div>
          <p className={styles.date}>
            {`${extractDayMonth.day} ${extractDayMonth.monthString} ${extractDayMonth.year}`}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Comment;
