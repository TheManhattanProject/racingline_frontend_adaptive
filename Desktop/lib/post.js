import { asyncHandler } from "@/middleware/error";

export default asyncHandler(async function post({ url, cookies, body }) {
    var { status, token } = await getAccessToken(cookies);
    if (!status) throw new Error('Acc-token is not valid!');
    var header = new Headers();
    header.append('Authorization', `Bearer ${token}`);
    header.append('Content-Type', 'application/json');
    var raw = JSON.stringify({ ...body });
    var reqOtn = { method: 'POST', headers: header, body: raw, redirect: 'follow' };
    var response = await fetch(url, reqOtn);
    if (!response.ok) throw new Error('Post is not done, Come to the post()!');
    var result = await response.json();
    return { suc: true, res: result };
});
