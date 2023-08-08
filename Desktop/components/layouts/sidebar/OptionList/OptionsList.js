import React from "react";
import styles from "./OptionsList.module.scss";
import Link from "next/link";
import Image from "next/image";

function OptionsList() {
 const page = '/hot_questions_list'
  const options = [
    { name: 'questions', url: '/question_list', selected_img: "/dstatic/sidebar/sques.svg", img: "/dstatic/sidebar/ques.svg" },
    { name: 'ask', url: '/ask', selected_img: "/dstatic/sidebar/sask.svg", img: "/dstatic/sidebar/ask.svg" },
    { name: 'hot questions', url: '/hot_questions_list', selected_img: "/dstatic/sidebar/shot.svg", img: "/dstatic/sidebar/hot.svg" },
    { name: 'polls', url: '/polls', selected_img: "/dstatic/sidebar/spolls.svg", img: "/dstatic/sidebar/polls.svg" },
    { name: 'search', url: '/search', selected_img: "/dstatic/sidebar/ssearch.svg", img: "/dstatic/sidebar/search.svg" },
  ]

  return (
    <div className={styles.mainContainer}>
      <div className={styles.listWrapper}>
        {
          options.map((item, i) => {
            const { name, url, selected_img, img } = item;
            return (
              <div key={i} className={styles.optionsWrapper}>
                {page === url && <div className={styles.selectedBackground}></div>}
                <div className={`${styles.option} ${page === url && styles.selectedOption}`} >
                  <figure className={styles.icon}>
                    {page === url
                      ? <Image
                        className={styles.icon}
                        src={selected_img}
                        alt="icon"
                        fill
                        priority
                      />
                      : <Image
                        className={styles.icon}
                        src={img}
                        fill
                        priority
                        alt="icon"
                      />
                    }
                  </figure>
                  <Link href={url} style={{ textDecoration: "none" }}>
                    <h1 className={`${styles.optionTitle} ${page === url && styles.selectedTitle}`} >
                      {name}
                    </h1>
                  </Link>
                </div>
              </div>
            )
          })
        }
        {/* <div className={styles.optionsWrapper}>
          {currentPage("questionlist") && (
            <div className={styles.selectedBackground}></div>
          )}
          <div
            className={`${styles.option} ${
              currentPage("questionlist") && styles.selectedOption
            }`}
          >
            <figure className={styles.icon}>
              {currentPage("questionlist") ? (
                <img
                  className={styles.icon}
                  src="/images/sidebar/sques.svg"
                  alt="icon"
                />
              ) : (
                <img
                  className={styles.icon}
                  src="/images/sidebar/ques.svg"
                  alt="icon"
                />
              )}
            </figure>
            <Link href={"/question_list"} style={{ textDecoration: "none" }}>
              <h1
                className={`${styles.optionTitle} ${
                  currentPage("questionlist") && styles.selectedTitle
                }`}
              >
                questions
              </h1>
            </Link>
          </div>
        </div>


        <div className={styles.optionsWrapper}>
          {currentPage("ask") && (
            <div className={styles.selectedBackground}></div>
          )}
          <div
            className={`${styles.option} ${
              currentPage("ask") && styles.selectedOption
            }`}
          >
            <figure className={styles.icon}>
              {currentPage("ask") ? (
                <img
                  className={styles.icon}
                  src="/images/sidebar/sask.svg"
                  alt="icon"
                />
              ) : (
                <img
                  className={styles.icon}
                  src="/images/sidebar/ask.svg"
                  alt="icon"
                />
              )}
            </figure>
            <Link href={"/ask"} style={{ textDecoration: "none" }}>
              <h1
                className={`${styles.optionTitle} ${
                  currentPage("ask") && styles.selectedTitle
                }`}
              >
                ask
              </h1>
            </Link>
          </div>
        </div>


        <div className={styles.optionsWrapper}>
          {currentPage("HotQuestions") && (
            <div className={`${styles.selectedBackground} ${styles.hotQuestions}`}></div>
          )}
          <div
            className={`${styles.option} ${
              currentPage("HotQuestions") && styles.selectedOption
            }`}
          >
            <figure className={styles.icon}>
              {currentPage("HotQuestions") ? (
                <img
                  className={styles.icon}
                  src="/images/sidebar/shot.svg"
                  alt="icon"
                />
              ) : (
                <img
                  className={styles.icon}
                  src="/images/sidebar/hot.svg"
                  alt="icon"
                />
              )}
            </figure>
            <Link href={"/hot_questions_list"} style={{ textDecoration: "none" }}>
              <h1
                className={`${styles.optionTitle} ${
                  currentPage("HotQuestions") && styles.selectedTitleHot
                }`}
              >
                hot questions
              </h1>
            </Link>
          </div>
        </div>


        <div className={styles.optionsWrapper}>
          {currentPage("Polls") && (
            <div className={styles.selectedBackground}></div>
          )}
          <div
            className={`${styles.option} ${
              currentPage("Polls") && styles.selectedOption
            }`}
          >
            <figure className={styles.icon}>
              {currentPage("Polls") ? (
                <img
                  className={styles.icon}
                  src="/images/sidebar/spolls.svg"
                  alt="icon"
                />
              ) : (
                <img
                  className={styles.icon}
                  src="/images/sidebar/polls.svg"
                  alt="icon"
                />
              )}
            </figure>
            <Link href={"/polls"} style={{ textDecoration: "none" }}>
              <h1
                className={`${styles.optionTitle} ${
                  currentPage("Polls") && styles.selectedTitle
                }`}
              >
                polls
              </h1>
            </Link>
          </div>
        </div>


        <div className={styles.optionsWrapper}>
          {currentPage("Search") && (
            <div className={styles.selectedBackground}></div>
          )}
          <div
            className={`${styles.option} ${
              currentPage("Search") && styles.selectedOption
            }`}
          >
            <figure className={styles.icon}>
              {currentPage("Search") ? (
                <img
                  className={styles.icon}
                  src="/images/sidebar/ssearch.svg"
                  alt="icon"
                />
              ) : (
                <img
                  className={styles.icon}
                  src="/images/sidebar/search.svg"
                  alt="icon"
                />
              )}
            </figure>
            <Link href={"/search"} style={{ textDecoration: "none" }}>
              <h1
                className={`${styles.optionTitle} ${
                  currentPage("Search") && styles.selectedTitle
                }`}
              >
                search
              </h1>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default OptionsList;
