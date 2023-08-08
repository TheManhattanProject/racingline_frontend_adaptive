import React, { useState, useEffect, useCallback } from "react";
import Footer from "../../../components/layouts/footer/Footer";
import styles from "./AskMain.module.scss";
import Header from "../../../components/layouts/headerForAsk/Header";
import AskQuestion from "./AskQuestion/AskQuestion";
import PopularQuestionsList from "./PopularQuestionsforAsk/PopularQuestionsList";
import RacetrackImg from "./RacetrackImg/RacetrackImg";
import { useCookies } from "react-cookie";
import Sidebar from "../../../components/layouts/sidebar/Sidebar";

function AskMain({ first_name, reputation, currentLink }) {
  const [first, setfirst] = useState();
  const [cookies, setCookie] = useCookies(["firstName"]);
  useEffect(() => {
    setfirst(cookies.firstName);
  }, [cookies]);
  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <Header reputation={reputation} />
      </header>
      <div className={styles.contentWrapper}>
        <aside>
          <Sidebar page="Ask" />
        </aside>
        <main className={styles.main}>
          <section className={styles.askQuestionSection}>
            <AskQuestion />
          </section>
          <section className={styles.popularQuestionSection}>
            <PopularQuestionsList />
          </section>
        </main>
      </div>
      <RacetrackImg />
      <Footer />
    </div>
  );
}

export default AskMain;
