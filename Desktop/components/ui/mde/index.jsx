import { useEffect, useState } from "react";
import Context from "./context";
import Editor from "./editor";
import Preview from "./preview";
import mde from "./style/mde.module.scss";

export default function Mde({ setMarkdownValue }) {
    const [markdownText, setMrakdownText] = useState("");
    useEffect(() => {
        setMarkdownValue(markdownText)
    }, [markdownText])
    return (
        <Context.Provider value={{ markdownText, setMrakdownText }}>
            <section className={mde.mde}>
                <Editor />
                <Preview />
                <span>Words: <b>{markdownText.length}</b>,  Lines: <b>{markdownText.split("\n").length}</b></span>
            </section>
        </Context.Provider>
    );
}