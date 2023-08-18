import ReactMarkdown from "react-markdown";
import DetailsRow from "./DetailsRow";
import styles from "./Question.module.scss";
import Tag from "./Tag";
import Votes from "./Votes";

export default function Question({ questionData }) {
  return (
    <div className={styles.questionWrapper}>
      <DetailsRow
        views={questionData?.Views}
        firstName={questionData?.FirstName}
        lastName={questionData?.LastName}
        createdAt={questionData?.CreatedAt}
        QUUID={questionData?.QUUID}
        profileImage={questionData?.ProfileImage}
      />
      <h1 className={styles.questionPrompt}>{questionData?.Title}</h1>
      <ReactMarkdown className={styles.questionDescription}>{questionData?.Description}</ReactMarkdown >
      <div className={styles.secondaryData}>
        <Tag tags={questionData?.Tags} />
        <Votes
          upvote={questionData?.UpvotesCount}
          downvote={questionData?.DownvotesCount}
          QUUID={questionData?.QUUID}
        />
      </div>
    </div>
  );
} 
