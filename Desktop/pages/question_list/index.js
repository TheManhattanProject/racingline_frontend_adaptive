import get from "@/lib/get";
import { Questionlt, QuestionltAth } from "@/lib/urls";
import Questions from "@/templates/questionList/Questions";
import { useContext, useEffect } from "react";
import { Page } from "../layout";

export default function index({ data: { result, current_page, no_of_pages } }) {
  const [page, setPage] = useContext(Page);
  const data = { detail: result };
  useEffect(() => {
    return () => setPage(prv => { return { CurrentPage: current_page, NoOfPages: no_of_pages } })
  }, [current_page, no_of_pages])

  return <Questions Post={data} />
}

export const getServerSideProps = async ({ query, req, res }) => {
  const { cookies } = req, { page = 1 } = query;
  const auth = false;
  const url = auth ? QuestionltAth : Questionlt;
  const { suc, res: data } = await get({ url, page, cookies, auth, req, res });
  if (suc) return { props: { data } };
  return data;
};