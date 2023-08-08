import styles from "./Questions.module.css";
import { dateToString } from "../../../lib/utils";
import QuestionCard from "./QuestionCard/QuestionCard";

const Questions = (props) => {
  return (
    <div className={styles.questions}>
      {props.Post.detail.map((data) => {
        const time = dateToString(data.CreatedAt);
        return (
          <QuestionCard
            Verified={data.Verified}
            key={data.QUUID}
            QUUID={data.QUUID}
            FirstName={data.FirstName}
            LastName={data.LastName}
            ProfileImage={data.ProfileImage}
            Title={data.Title}
            Description={data.Description}
            UpvotesCount={data.UpvotesCount}
            DownvotesCount={data.DownvotesCount}
            Views={data.Views}
            AnswerCount={data.AnswerCount}
            Time={time}
          />
        );
      })}
      <div className={styles.dash}></div>
    </div>
  );
};
export default Questions;
