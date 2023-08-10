import styles from "./AskMain.module.scss";
import AskQuestion from "./AskQuestion/AskQuestion";

function AskMain() {
  const reputation = 0;
  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        {/* <Header reputation={reputation} /> */}
      </header>
      <div className={styles.contentWrapper}>
        <aside>
          {/* <Sidebar page="Ask" /> */}
        </aside>
        <main className={styles.main}>
          <section className={styles.askQuestionSection}>
            <AskQuestion />
          </section>
          <section className={styles.popularQuestionSection}>
            {/* <PopularQuestionsList /> */}
          </section>
        </main>
      </div>
      {/* <RacetrackImg /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default AskMain;
