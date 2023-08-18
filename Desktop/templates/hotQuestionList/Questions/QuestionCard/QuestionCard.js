import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./QuestionCard.module.css";

const QuestionCard = (props) => {
  const imageStyle = {
    objectFit: "cover",
    verticalAlign: "top",
  };
  const image = useMemo(() => {
    if (props.ProfileImage !== "") {
      // console.log(props.ProfileImage);
      return (
        <div className={styles.profile_picture}>
          <div style={imageStyle}>
            <Image
              src={props.ProfileImage}
              alt={`Profile picture of ${props.FirstName}`}
              width={32}
              height={32}

              className={styles.setInitialPositionTrue}
            />
          </div>
        </div>
      );
    }

    return (
      <div className={styles.emptyProfileImageDiv}>
        <p>{props.FirstName.charAt(0).toUpperCase()}</p>
      </div>
    );
  }, [props.ProfileImage]);

  return (
    <>
      <Link
        href={`/question/${props.QUUID}`}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.questioncard}>
          <div className={styles.questioncardupvotes}>
            <div className={`${styles.flexrow} ${styles.upDown}`}>
              <div className={styles.arrows}>
                <Image
                  src="/dstatic/hotquestions/upvote.png"
                  alt="upvote"
                  width={18}
                  height={20}
                  className={styles.setInitialPositionTrue}

                />
              </div>
              <div className={styles.arrows}>
                <Image
                  src="/dstatic/hotquestions/downvote.png"
                  alt="downvote"
                  width={18}
                  height={20}
                  className={styles.setInitialPositionTrue}

                />
              </div>
            </div>
            <div className={styles.questioncardupvotescount}>
              {props.UpvotesCount - props.DownvotesCount}
            </div>
          </div>
          <div className={styles.questionContentPart}>
            <div className={`${styles.flexrow} ${styles.questioncardheader}`}>
              <div className={styles.userInfo}>
                {image}
                <h4 className={styles.questioncardauthorname}>
                  {props.FirstName} {props.LastName}
                </h4>
              </div>
              <div className={styles.iconContainer}>
                <div className={styles.fire}>
                  <div>
                    <Image
                      src="/dstatic/hotquestions/sidebar/hotquestions.png"
                      alt="Hot Question"
                      fill={true}
                      className={styles.setInitialPositionTrue}
                    />
                  </div>
                </div>
                <div className={styles.bookmark}>
                  <div>
                    <Image
                      src="/dstatic/hotquestions/sidebar/bookmarkIcon.svg"
                      alt="Bookmark"
                      fill={true}

                      className={styles.setInitialPositionTrue}
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 className={styles.questioncardheading}>{props.Title}</h2>
            <ReactMarkdown className={styles.reactMarkDown}>
              {props.Description}
            </ReactMarkdown>
            <div className={`${styles.questioncardfooter} ${styles.flexrow}`}>
              <div
                className={`${styles.flexrow} ${styles.questioncardfooterleft}`}
              >
                <div className={styles.flexrow}>
                  <div className={styles.questioncardfooterimg}>
                    <Image
                      src="/dstatic/hotquestions/sidebar/Icon.svg"
                      alt="answers"
                      className={styles.setInitialPositionTrue}
                      height={9.56}
                      width={11.48}

                    />
                  </div>
                  <div className={styles.questionfootertext}>
                    {props.AnswerCount} Answers
                  </div>
                </div>
                <div className={styles.flexrow}>
                  <div className={styles.questioncardfooterimg}>
                    <Image
                      src="/dstatic/hotquestions/sidebar/Icon.svg"
                      alt="views"
                      className={styles.setInitialPositionTrue}
                      height={9}
                      width={13}

                    />
                  </div>
                  <div className={styles.questionfootertext}>
                    {props.Views} views
                  </div>
                </div>
              </div>
              <div className={`${styles.flexrow} ${styles.time}`}>
                <div className={styles.questioncardfooterimg}>
                  <Image
                    src="/dstatic/hotquestions/clock.png"
                    alt="time"
                    className={styles.setInitialPositionTrue}
                    height={11.67}
                    width={11.67}

                  />
                </div>

                <div className={styles.questioncardfootertime}>
                  {props.Time}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.dash}></div>
    </>
  );
};
export default QuestionCard;
