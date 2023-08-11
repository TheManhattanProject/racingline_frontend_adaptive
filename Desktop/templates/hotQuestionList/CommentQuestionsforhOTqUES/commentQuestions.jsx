import { useState } from "react";
import styles from "./commentQuestions.module.css";
import AddCommentQuestion from "../CommentQuestionsforhOTqUES/AddComment/addCommentQuestion";
import Comment from "../CommentforHotQues/Comment";

export default function CommentQuestion(props) {
  const [comments, setComments] = useState(props.Comments);
  const [limit, setLimit] = useState(3);

  const handleComments = () => {
    if (limit <= comments.length) {
      setLimit(limit + 3);
    } else {
      setLimit(comments.length);
    }
  };

  return (
    <div className={styles.comments}>
      {comments
        .filter((item, index) => index < limit)
        .map((comment) => {
          return <Comment key={comment.CUUID} Comment={comment} />;
        })}
      {props.Comments.length > limit && (
        <div className={styles.viewall} onClick={handleComments}>
          View all
        </div>
      )}
      <AddCommentQuestion AddComment={setComments} QUUID={props.QUUID} />
    </div>
  );
}
