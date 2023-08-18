// import MobileView from "../../components/search/MobileVersion/Main/Main";
import MobileView from "/components/question/MobileVersion/Index/index.js";
import DesktopViewMedium from "/components/question/DesktopMedium/Index/index.js";
import DesktopView from "/components/question/DesktopVersion/Main/index.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { DetaialQuestionV2 } from "/components/constants/urls.js";
import validator from "validator";

export default function Question(props) {
  return (
    <>
      <DesktopView Data={props.data} />
      <DesktopViewMedium Data={props.data} />
      <MobileView Data={props.data} />
    </>
  );
}

export async function getServerSideProps({ query, req }) {
  try {
    const postId = query.postId;
    const isUUID = validator.isUUID(postId);
    if (!isUUID) {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
    }
    try {
      let response = await axios.get(`${DetaialQuestionV2}${postId}/`);
      const data = await response.data;
      return {
        props: {
          data: data,
        },
      };
    } catch (err) {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
    }
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
