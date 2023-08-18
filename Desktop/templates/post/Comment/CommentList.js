import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import styles from "./CommentsList.module.scss";
import Reply from "./Reply";

function CommentList({ comments, QUUID, AUUID }) {
  const [commentList, setCommentList] = useState(comments);
  const [limit, setLimit] = useState(3);

  const handleComments = () => {
    if (limit <= commentList.length) {
      setLimit(limit + 3);
    }
  };

  useEffect(() => {
    setCommentList(comments)
  }, [comments])

  return (
    <section className={styles.listContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.heading}>
          <h2>Comments</h2>
          {commentList?.length > 0 && <span>{commentList?.length}</span>}
        </div>
        <hr className={styles.breakline2} />
        {commentList?.length > 0 && (
          <div>
            {commentList
              .filter((item, index) => index < limit)
              .map((comment, index) => {
                return <CommentCard commentData={comment} key={index} QUUID={QUUID} AUUID={AUUID} />;
              })}

            {commentList?.length > limit && (
              <div className={styles.viewMore} onClick={handleComments}>
                <p>
                  View More Comments
                  <span>{` (${commentList?.length - limit})`}</span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className={styles.replySection}>
        {QUUID && !AUUID && (
          <Reply
            isListEmpty={comments?.length > 0}
            isListFull={limit >= commentList?.length}
            QUUID={QUUID}
            AddComment={setCommentList}
          />
        )}
        {AUUID && QUUID && (
          <Reply
            isListEmpty={comments?.length > 0}
            isListFull={limit >= commentList?.length}
            QUUID={QUUID}
            AUUID={AUUID}
            AddComment={setCommentList}
          />
        )}
      </div>
    </section>
  );
}

export default CommentList;
