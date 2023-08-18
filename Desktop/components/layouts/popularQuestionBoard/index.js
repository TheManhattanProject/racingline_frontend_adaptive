import get from '@/lib/get';
import { HotQuestionsUrl } from '@/lib/urls';
import DashedEdge from '@/templates/ask/dashedEdgeForAsk/DashedEgde';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import PopularQuestion from './PopularQuestion';
import styles from './PopularQuestionsList.module.scss';

export default function PopularQuestionBoard() {
  const [list, setList] = useState([]);
  const [cookies] = useCookies([
    "accessToken",
    "refreshToken",
    "accessTokenExpiresAt",
    "refreshTokenExpiresAt",
  ]);

  useEffect(() => {
    const page = 1;
    const auth = false;
    const url = HotQuestionsUrl
    get({ url, page, cookies, auth }).then(data => {
      const { res } = data;
      console.log(res);
      setList(res.response.result)
    })
  }, []);

  return (
    <div className={styles.container}>
      <h2>
        Popular Questions
        <span>
          <div className={styles.img}>
            <Image
              src='/dstatic/PopularQuestionsforAsk/next.png'
              alt={''}
              fill={true}
              className={styles.setInitialPositionTrue}
            />
          </div>
        </span>
      </h2>
      <div className={styles.listContainer}>
        <div className={styles.edgeBorder}>
          <DashedEdge />
        </div>
        <div className={styles.listWrapper}>
          {list.length > 0 &&
            list
              .filter((i, k) => k < 5)
              .map((item, i) => (
                <div key={i}>
                  <PopularQuestion {...item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

