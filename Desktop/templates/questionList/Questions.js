import { dateToString } from '@/lib/utils';
import QuestionCard from './QuestionCard/QuestionCard';
import styles from './Questions.module.css';

const Questions = (props) => {
  console.log(props);
  return (
    <div className={styles.questions}>
      {props.Post.detail.map((data) => {
        const time = dateToString(data.created_at);
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
            AnswerCount={data.answers_count}
            Time={time}
          />
        );
      })}
      <div className={styles.dash}></div>
    </div>
  );
};
export default Questions;
