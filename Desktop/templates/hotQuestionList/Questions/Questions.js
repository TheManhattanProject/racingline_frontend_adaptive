import styles from "./Questions.module.css";

import QuestionCard from "./QuestionCard/QuestionCard";
import dateHandlerToString from "../DateHandlerToString/datehandlerToString";

const Questions = (props) => {
  console.log(props)
  return (
    <div className={styles.questions}>
      {props.Post.detail.map((data) => {
        const time = dateHandlerToString(data.created_at);
        const date = new Date(data.created_at);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' })
        const year = (date.getFullYear());
        const dateCreatedAt = `${day} ${month} ${year}`
        return (
          <QuestionCard
            Verified={data.verified}
            key={data.quuid}
            QUUID={data.quuid}
            FirstName={data.first_name}
            LastName={data.last_name}
            ProfileImage={data.profile_image}
            Title={data.title}
            Description={data.description}
            UpvotesCount={data.upvotes_count}
            DownvotesCount={data.downvotes_count}
            Views={data.views}
            AnswerCount={data.answer_count}
            Time={time}
            Date={dateCreatedAt}
          />
        );
      })}
    </div>
  );
};
export default Questions;
