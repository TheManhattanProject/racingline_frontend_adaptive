import get from "@/lib/get";
import { HotQuestionsUrl } from "@/lib/urls";
import Questions from "@/templates/hotQuestionList/Questions/Questions";
import { useContext, useEffect } from "react";
import { Page } from "../layout";

export default function index({ data: { response: { result, current_page, no_of_pages } } }) {
  console.log(result, current_page, no_of_pages);
  const [page, setPage] = useContext(Page);
  const data = { detail: result };
  useEffect(() => {
    return () => setPage(prv => { return { CurrentPage: current_page, NoOfPages: no_of_pages } })
  }, [current_page, no_of_pages])
  console.log(data);
  return <Questions Post={data} />
}

export const getServerSideProps = async ({ query, req, res }) => {
  const { cookies } = req, { page = 1 } = query;
  const auth = true;
  const url = HotQuestionsUrl;
  const { suc, res: data } = await get({ url, page, cookies, auth, req, res });
  console.log(data);
  if (suc) return { props: { data } };
  return data;
};

