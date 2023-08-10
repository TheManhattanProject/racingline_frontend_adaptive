import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import context from "./context";
import mde from "./style/mde.module.scss";

export default function Preview() {
  const { markdownText } = useContext(context);
  return (
    <div className={mde.Preview}>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
}
