import { asyncHandler } from '@/middleware/error';
import { getAccessToken } from './tokens';

export default asyncHandler(async function get({ url, page, cookies, auth, req, res }) {
    var { status, token } = await getAccessToken(cookies, req, res);
    if (!status) throw new Error('Acc-token is not valid!');
    var header = new Headers()
    header.append("Content-Type", "application/json");
    if (auth) header.append("Authorization", `Bearer ${token}`);
    var reqOtn = { method: "GET", redirect: "follow", headers: header };
    var response = await fetch(`${url}?page=${page}`, reqOtn);
    if (!response.ok) throw new Error('Fetch is not done, Come to the get()!');
    var result = await response.json();
    return { suc: true, res: result, token };
});
