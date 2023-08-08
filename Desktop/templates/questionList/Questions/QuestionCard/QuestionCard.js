import styles from "./QuestionCard.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from 'next/link';
import millify from "millify";
import { useMemo } from "react";

const QuestionCard = (props) => {
  const views = props.Views;

  const image = useMemo(() => {
    if (props.ProfileImage !== "") {
      return (
        <div className={styles.profile_picture}>
          <Image
            src={props.ProfileImage}
            alt={`Profile picture of ${props.FirstName}`}
            height={32}
            width={32}
            sizes="(max-width: 1350) 24px, 32px"
          />
        </div>
      );
    }
    return (
      <div className={styles.emptyProfileImageDiv}>
        <p >{props.FirstName.charAt(0).toUpperCase()}</p>
      </div>
    );
  }, [props.ProfileImage, props.FirstName]);


  return (
    <div>
      <div className={styles.dash}></div>
      <Link href={`/question/${props.QUUID}`} style={{ textDecoration: 'none' }}>
        <div className={styles.questioncard}>
          <div className={styles.questioncardupvotes}>
            <div>
              <Image
                src="/dstatic/questions/upvote.png"
                alt="upvote"
                className={styles.arrows}
                width={18}
                height={20}
              />
              <Image
                src="/dstatic/questions/downvote.png"
                alt="downvote"
                className={styles.arrows}
                width={18}
                height={20}
              />
            </div>
            <p className={styles.questioncardupvotescount}>
              {props.UpvotesCount - props.DownvotesCount}
            </p>
          </div>
          <div className={styles.questionContentPart}>
            <div className={`${styles.flexrow} ${styles.questioncardheader}`}>
              {image}
              <h4 className={styles.questioncardauthorname}>
                {props.FirstName} {props.LastName}
              </h4>
              <div className={styles.bookmark}>
                <Image
                  src="/dstatic/questions/bookmarkIcon.svg"
                  alt="Bookmark"
                  height={24}
                  width={17}
                />
              </div>
            </div>
            <h2 className={styles.questioncardheading}>{props.Title}</h2>
            <ReactMarkdown className={styles.reactMarkDown}>
              {props.Description.split("\n")[0]}
            </ReactMarkdown>
            <div className={`${styles.questioncardfooter} ${styles.flexrow}`}>
              <div
                className={`${styles.flexrow} ${styles.questioncardfooterleft}`}
              >
                <div className={styles.flexrow}>
                  <Image
                    src="/dstatic/questions/Outline/Communication/Icon.svg"
                    alt="answers"
                    className={styles.questioncardfooterimg}
                    height={9.56}
                    width={11.48}
                  />
                  <p className={styles.questionfootertext}>
                    {props.AnswerCount} Answers
                  </p>
                </div>
                <div className={styles.flexrow}>
                  <Image
                    src="/dstatic/questions/Outline/Status/Icon.svg"
                    alt="views"
                    className={styles.questioncardfooterimg}
                    height={9}
                    width={13}
                  />
                  <p className={styles.questionfootertext}>
                    {millify(views)} views
                  </p>
                </div>
              </div>
              <div className={`${styles.flexrow} ${styles.time}`}>
                <Image
                  src="/dstatic/questions/stopwatch.png"
                  alt="time"
                  className={styles.questioncardfooterimg}
                  height={12}
                  width={12}
                />
                <p className={styles.questioncardfootertime}>{props.Time}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default QuestionCard;
