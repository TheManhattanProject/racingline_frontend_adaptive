import styles from "/components/question_list/DesktopVersion/Main/index.module.scss";
import Sidebar from "../../../Sidebar/Sidebar";
import Questions from "/components/question_list/DesktopVersion/Questions/Questions";
import Leaderboard from "../../../hotquestions/DesktopVersion/Leaderboard/Leaderboard";
import Pagechange from "/components/question_list/DesktopVersion/Pagechange/PageChange";
import Footer from "/components/question_list/DesktopVersion/Footer/Footer";
import Index from "/components/question_list/DesktopVersion/Marquee/Index";
import MarqueeHeader from "../../../Marquee/Marquee";

const DesktopView = (props) => {
  console.log(props);
  return (
    <div className={styles.MainDesktopContainer}>
      <MarqueeHeader />

      <div className={styles.app}>
        <div className={styles.sidebarcontainer}>
          <Sidebar Reputation={props.Post.reputation} page="questionlist" />
        </div>
        {props.Post.detail == null ? (
          <div className={styles.answers}>
            <div className={styles.noAnswers}>No Questions asked yet</div>
          </div>
        ) : (
          <div className={styles.questionsWrapper}>
            <Questions Post={props.Post} />
          </div>
        )}
        <div className={styles.leaderboardcontainer}>
          <Leaderboard LeaderArray={props.Post} />
        </div>
      </div>
      <div className={styles.pagechangecontainer}>
        <Pagechange
          CurrentPage={props.Post.currentPage}
          NoOfPages={props.Post.noOfPages}
        />
      </div>
      <Footer />
    </div>
  );
};
export default DesktopView;
