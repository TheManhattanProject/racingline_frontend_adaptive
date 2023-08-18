import Image from "next/image";
import Link from "next/link";
import styles from "./OptionsList.module.scss";

function OptionsList({ page }) {
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
      </div>
    </div>
  );
}

export default OptionsList;
