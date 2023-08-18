import get from "@/lib/get";
import { GetPolls, GetUserPolls } from "@/lib/urls";
import styles from '@/styles/polls.module.scss';
import Polls from "@/templates/polls/Main/PollsMain";
import { useContext, useEffect, useState } from "react";
import { Page } from "../layout";


export default ({ data: { polls, current_page, no_of_pages } }) => {
    const [page, setPage] = useContext(Page);
    const [modalToggle, setModalToggle] = useState(false);

    useEffect(() => {
        return () => setPage(prv => { return { CurrentPage: current_page, NoOfPages: no_of_pages } })
    }, [current_page, no_of_pages])

    return (
        <div className={styles.main}>

            <Polls polls={polls} />
        </div>
    );
}

export const getServerSideProps = async ({ query, req, res }) => {
    const { cookies } = req, { page = 1 } = query;
    const auth = false;
    const url = auth ? GetUserPolls : GetPolls;
    const { suc, res: data } = await get({ url, page, cookies, auth, req, res });
    if (suc) return { props: { data } };
    return data;
};
