import get from "@/lib/get";
import { Questionlt, QuestionltAth } from "@/lib/urls";

export default function index({ data }) {
    console.log(data);
    return (
        <main>
            hellow
        </main>
    );
}

export const getServerSideProps = async ({ query, req, res }) => {
    const { cookies } = req, { page = 1 } = query;
    const auth = false;
    const url = auth ? QuestionltAth : Questionlt;
    const response = await get({ url, page, cookies, auth, req, res })
    const { res: data } = response;
    return { props: { data } };
}