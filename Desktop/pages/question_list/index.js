import MobileView from "/components/question_list/MobileVersion/Main/Index";
import DesktopView from "/components/question_list/DesktopVersion/Main/index";
import {
  QuestionList,
  QuestionListAuth,
  RefreshToken,
} from "/components/constants/urls";
 
export async function getServerSideProps({ query, req }) {
  let post = {};
  var currentdate = new Date();
  const refreshokenExpiryTime = new Date(req.cookies.refreshTokenExpiresAt);
  if (
    req.cookies.refreshToken === undefined ||
    req.cookies.refreshToken === "undefined" ||
    refreshokenExpiryTime <= currentdate
  ) {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      if (!query.page) query.page = 1;

      let response = await fetch(
        `${QuestionList}?page=${query.page}`,
        requestOptions
      );

      let newData = await response.json();
      post.detail = newData.result;
      post.currentPage = newData.current_page;
      post.noOfPages = newData.no_of_pages;
      post.leaderBoard = newData.leaderboard;
    } catch (err) {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
    }
  } else {
    var accessToken = req.cookies.accessToken;
    const accessTokenExpiryTime = new Date(req.cookies.accessTokenExpiresAt);
    const refreshTokenExpiryTime = new Date(req.cookies.refreshTokenExpiresAt);
    var currentdate = new Date();
    if (refreshTokenExpiryTime <= currentdate) {
      try {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        if (!query.page) query.page = 1;

        let response = await fetch(
          `${QuestionList}?page=${query.page}`,
          requestOptions
        );

        let newData = await response.json();
        post.detail = newData.result;
        post.currentPage = newData.current_page;
        post.noOfPages = newData.no_of_pages;
        post.leaderBoard = newData.leaderboard;
      } catch (err) {
        return {
          redirect: {
            destination: "/404",
            permanent: false,
          },
        };
      }
    } else {
      if (
        accessTokenExpiryTime <= currentdate ||
        req.cookies.accessTokenExpiresAt === "undefined" ||
        req.cookies.accessToken === undefined
      ) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          refresh_token: req.cookies.refreshToken,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        const response = await fetch(RefreshToken, requestOptions);
        const result = await response.json();
        accessToken = result.access_token;
        req.cookies.accessTokenExpiresAt = result.access_token_expires_at;
        accessToken = result.access_token;
      }

      try {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${accessToken}`);

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        if (!query.page) query.page = 1;

        let response = await fetch(
          `${QuestionListAuth}?page=${query.page}`,
          requestOptions
        );
        let newData = await response.json();
        post.detail = newData.result == undefined ? null : newData.result;
        post.currentPage = newData.current_page == undefined ? null : newData.current_page;
        post.noOfPages = newData.no_of_pages == undefined ? null : newData.no_of_pages;
        post.leaderBoard = newData.leaderboard == undefined ? null : newData.leaderboard;
        post.reputation = newData.reputation == undefined ? null : newData.reputation;
      } catch (err) {
        return {
          redirect: {
            destination: "/404",
            permanent: false,
          },
        };
      }
    }
  }
  console.log(post);
  return {
    props: {
      post,
    },
  };
}

export default function Question(props) {
  return (
    <div>
      <DesktopView Post={props.post} />
      <MobileView Post={props.post} />
    </div>
  );
}