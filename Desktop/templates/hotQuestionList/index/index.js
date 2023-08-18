import Questions from "../Questions/Questions";
import styles from "./index.module.scss";
export default function DesktopView(props) {
  console.log(props);
  return (
    <div className={styles.parentdiv}>
      {/* <div className={styles.sidebarDesign} /> */}
      <div className={styles.Background}>
        {/* <Heading /> */}
        <div className={styles.flex}>
          <div className={styles.sidebarcontainer}>
            {/* {props.Post.reputation !== undefined ? (
              <Sidebar reputation={props.Post.reputation} />
            ) : (
              <Sidebar />
            )} */}
            {/* <Sidebar page="HotQuestions" /> */}
          </div>
          <div className={styles.questionsDiv}>
            <div className={styles.dash}></div>
            <div className={styles.card}>
              {props.Post == null ? (
                <div className={styles.noHotQuestions}>
                  No HotQuestions to Show
                </div>
              ) : (
                <Questions Post={props.Post} />
              )}
            </div>
            {/* <div className={styles.pagechangecontainerMobile}>
              {props.Post == null ? (
                <div></div>
              ) : (
                <PageChangeMobile
                  CurrentPage={props.Post.currentPage}
                  NoOfPages={props.Post.noOfPages}
                />
              )}
            </div> */}
          </div>
          <div className={styles.leaderboardcontainer}>
            {/* <Leaderboard LeaderArray={props.Post} /> */}
          </div>
        </div>
        <div className={styles.pagechangecontainer}>
          {/* {props.Post == null ? (
            <div></div>
          ) : (
            // <Pagechange
            //   CurrentPage={props.Post.currentPage}
            //   NoOfPages={props.Post.noOfPages}
            // />
          )} */}
        </div>
      </div>
      {/* <RacetrackImg /> */}
      {/* <Footer /> */}
    </div>
  );
}
