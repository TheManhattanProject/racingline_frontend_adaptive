import MarqueeHeader from '@/components/layouts/marquee/Marquee';
import Sidebar from '../../components/layouts/Sidebar/Sidebar';

const X = ({ a }) => {
  return <h1> {a} </h1>;
};

const layouts = {
  '/question_list': {
    left: (reputation) => (
      <Sidebar
        Reputation={reputation}
        page='questionlist'
      />
    ),
    top: <MarqueeHeader />,
    right: () => <Leaderboard LeaderArray={props.Post} />,
    bottom: () => (
      <Pagechange
        CurrentPage={props.Post.currentPage}
        NoOfPages={props.Post.noOfPages}
      />
    ),
    centre: (x) => <Main Post={x} />,
    // centre: (x) => <X a={x} />
  },
  '/ask': { left: <Sidebar />, top: '', right: '', centre: '' },
  '/hot_questions_list': { left: <Sidebar />, top: '', right: '', centre: '' },
  '/polls': { left: <Sidebar />, top: '', right: '', centre: '' },
  '/search': { left: <Sidebar />, top: '', right: '', centre: '' },
};

export default function index() {
  // getAccessToken().then(res => console.log(res))c
  const x = '/question_list';
  const { left, centre, top, right, bottom } = layouts[x];
  return (
    // <>
    //   {/* {left} */}
    //   <main>{centre('asassas')}</main>
    // </>
    <main className={styles.MainDesktopContainer}>
      {top}
      <div className={styles.app}>
        <div className={styles.sidebarcontainer}>{left(20)}</div>
        {centre}
        <div className={styles.leaderboardcontainer}>{right}</div>
      </div>
      <div className={styles.pagechangecontainer}>{bottom}</div>
    </main>
  );
}

function Main(props) {
  return (
    <>
      {props.Post.detail == null ? (
        <div className={styles.answers}>
          <div className={styles.noAnswers}>No Questions asked yet</div>
        </div>
      ) : (
        <div className={styles.questionsWrapper}>
          <Questions Post={props.Post} />
        </div>
      )}
    </>
  );
}
