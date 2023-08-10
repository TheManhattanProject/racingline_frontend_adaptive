import { setCookie } from 'cookies-next';
import { RefreshToken } from "./urls";

async function getAccessToken(cookies, req = null, res = null) {
    var { accessToken, accessTokenExpiresAt, refreshTokenExpiresAt, refreshToken } = cookies;
    var date = new Date();
    var refTknExp = new Date(refreshTokenExpiresAt);
    var accTknExp = new Date(accessTokenExpiresAt);
    if (refreshToken === undefined || refreshToken === "undefined" || refTknExp <= date) {
        return { status: false, token: null };
    };
    if (accessToken === undefined || accessToken === "undefined" || accTknExp <= date) {
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({ refresh_token: refreshToken });
            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };
            const response = await fetch(RefreshToken, requestOptions);
            if (!response.ok) return new Error('Server Crashed, Login again!')
            const result = await response.json();
            accessToken = result.access_token;
            accessTokenExpiresAt = result.access_token_expires_at;
            (req && res) && setCookie('accessToken', accessToken, { req, res, maxAge: 2592000 });
            (req && res) && setCookie('accessTokenExpiresAt', accessTokenExpiresAt, { req, res, maxAge: 2592000 });
            return { status: true, token: accessToken };
        } catch (error) {
            return { status: false, token: null };
        }
    };
    return { status: true, token: accessToken };
}

export { getAccessToken };

