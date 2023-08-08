import { getAccessToken } from "@/lib/tokens"
import Sidebar from "../../components/layouts/Sidebar/Sidebar"
import MarqueeHeader from "@/components/layouts/marquee/Marquee"

const X = ({ a }) => {
  return <h1> {a} </h1>
}
const layouts = {
  '/question_list': { left:(reputation) =>  <Sidebar Reputation={reputation} page="questionlist"/>, top: <MarqueeHeader />, right: '', centre: (x) => <X a={x} />},
  '/ask': { left: <Sidebar />, top: '', right: '', centre: '' },
  '/hot_questions_list': { left: <Sidebar />, top: '', right: '', centre: '' },
  '/polls': { left: <Sidebar />, top: '', right: '', centre: '' },
  '/search': { left: <Sidebar />, top: '', right: '', centre: '' }
}

export default function index() {
  // getAccessToken().then(res => console.log(res))c
  const x = '/question_list';
  const { left, centre, top, right } = layouts[x]
  return (
    <>
      {/* {left} */}
      <main>{centre('asassas')}</main>
    </>
  )
}


<main className={styles.MainDesktopContainer}>
      {top}
      <div className={styles.app}>
        <div className={styles.sidebarcontainer}>
          {left(20)}
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
    </main>