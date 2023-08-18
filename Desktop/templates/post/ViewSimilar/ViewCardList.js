import { dateToString } from "@/lib/utils";
import DashedBorder from "../UI/DashedBorder";
import ViewCard from "./ViewCard";
import styles from './ViewCardList.module.scss';

function ViewCardList({ questionData }) {
  return (
    <>
      {questionData?.SimilarQuestions?.length > 0 && (
        <div className={styles.container}>
          <h2>View Similar</h2>
          <DashedBorder />
          <div>
            {questionData?.SimilarQuestions?.map((data) => {
              const time = dateToString(data.CreatedAt);
              return (
                <ViewCard
                  Time={time}
                  key={data.QUUID}
                  QUUID={data.QUUID}
                  Title={data.Title}
                  Description={data.Description}
                  AnswerCount={data.AnswerCount}

                />
              )
            })}
          </div>
        </div>
      )}
    </>

  );
}

export default ViewCardList;
