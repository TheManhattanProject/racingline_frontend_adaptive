import React from "react";
import validator from "validator";
import { DetaialQuestionV2 } from "/components/constants/urls";
import Main from "/components/questionById/Main/Main";

export default function index({ result }) {


  console.log("bhatora result=  ",result);
  return <Main data={result} />;
}

export async function getServerSideProps({ query, api }) {
  const { questionId } = query;
  // console.log("the bhatora id is:  ",questionId)
  const isUUID = validator.isUUID(questionId);
  if (!isUUID) {
    // return {
    //   redirect: {
    //     destination: "/404",
    //     permanent: false,
    //   },
    //};
  }
  try {
    const response = await fetch(`${DetaialQuestionV2}${questionId}/`);
    const result = await response.json();
    //console.log(result);
    return {
      props: {
        result,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
