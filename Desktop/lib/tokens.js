// import { cookies } from "next/dist/client/components/headers"
import { useCookies } from "react-cookie";
import { RefreshToken } from "./urls";

async function getAccessToken() {
    var [cookies, setCookie, removeCookie] = useCookies([
        "firstName",
        "lastName",
        "profileImage",
        "accessToken",
        "refreshToken",
        "accessTokenExpiresAt",
        "refreshTokenExpiresAt",
        "redirectRoute",
        "routeQuery",
    ]);
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
            if (!response.ok) return new Error('Server Crached, Login agiain!')
            const result = await response.json();
            setCookie("accessToken", result.access_token, {
                path: "/",
                maxAge: 2592000,
                sameSite: true,
            });
            setCookie("accessTokenExpiresAt", result.access_token_expires_at, {
                path: "/",
                maxAge: 2592000,
                sameSite: true,
            });
            accessToken = result.access_token;
            return { status: true, token: accessToken };
        } catch (error) {
            return { status: false, token: null };
        }
    };
    return { status: true, token: accessToken };
}

export { getAccessToken };
