import { RefreshToken } from '@/lib/urls';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { useContext, useRef, useState } from "react";
import { useCookies } from 'react-cookie';
import context from "./context";
import mde from "./style/mde.module.scss";

export default function Editor() {
    const [cursorPosition, setCursorPosition] = useState(0);
    const [textarea, setTextarea] = useState("");
    const { setMrakdownText, markdownText } = useContext(context);
    const textRef = useRef(null);
    const router = useRouter();
    const [cookies] = useCookies([
        'accessToken',
        'refreshToken',
        'accessTokenExpiresAt',
        'refreshTokenExpiresAt',
    ]);

    const handleBlur = () => {
        if (textRef.current) {
            setCursorPosition(textRef.current.selectionStart);
        }
    };
    const handleFocus = () => {
        setTimeout(() => {
            textRef.current.selectionStart = cursorPosition;
            textRef.current.selectionEnd = cursorPosition;
        }, 0);
    };

    function onTextareaChange(e, value = "") {
        var nextValue = e.currentTarget.value;
        if (value !== "") return setTextarea(value);
        setTextarea(nextValue);
        setMrakdownText(nextValue);
    }
    /*
     * find array in which you want to add propertise
     */
    function getPositionFromMarkdown() {
        var thatObj = {};
        var markdownArray = textRef.current.defaultValue.split("\n");
        var len = -1;
        var markdownArrayObj = markdownArray.map((element) => {
            len += element.length + 1;
            return { len, str: element };
        });
        for (const item in markdownArrayObj) {
            const startpoint = markdownArrayObj[item].len - markdownArrayObj[item].str.length;
            const endpoint = markdownArrayObj[item].len;
            if (cursorPosition >= startpoint && cursorPosition <= endpoint) {
                thatObj = {
                    startpoint,
                    endpoint,
                    item: markdownArrayObj[item]
                };
                break;
            }
        }
        return thatObj;
    }

    const toolBar = [
        {
            name: "New-H1",
            icon: "material-symbols:horizontal-rule",
            onClick: (e) => {
                const nextValue = markdownText + "\r\n# ";
                setMrakdownText(nextValue);
                onTextareaChange(e, nextValue);
                setCursorPosition((prev) => prev + 3);
            },
            onRemove: () => { }
        },
        {
            name: "H1",
            icon: "material-symbols:format-h1-rounded",
            onClick: (e) => {
                const { startpoint, item: { str } } = getPositionFromMarkdown();
                if (str.includes("# ")) {
                    const nextValue = markdownText.slice(0, startpoint) + markdownText.slice(startpoint + 2);
                    setMrakdownText(nextValue);
                    onTextareaChange(e, nextValue);
                    setCursorPosition((prev) => prev - 2);
                } else {
                    const nextValue = markdownText.slice(0, startpoint) + "# " + markdownText.slice(startpoint);
                    setMrakdownText(nextValue);
                    onTextareaChange(e, nextValue);
                    setCursorPosition((prev) => prev + 2);
                }
            },
            onRemove: () => { }
        },
        {
            name: "H2",
            icon: "material-symbols:format-h2-rounded",
            onClick: (e) => {
                const { startpoint, item: { str } } = getPositionFromMarkdown();
                if (str.includes("## ")) {
                    const nextValue = markdownText.slice(0, startpoint) + markdownText.slice(startpoint + 3);
                    setMrakdownText(nextValue);
                    onTextareaChange(e, nextValue);
                    setCursorPosition((prev) => prev - 3);
                } else {
                    const nextValue = markdownText.slice(0, startpoint) + "## " + markdownText.slice(startpoint);
                    setMrakdownText(nextValue);
                    onTextareaChange(e, nextValue);
                    setCursorPosition((prev) => prev + 3);
                }
            },
            onRemove: () => { }
        },
        {
            name: "H3",
            icon: "material-symbols:format-h3",
            onClick: (e) => {
                const { startpoint, item: { str } } = getPositionFromMarkdown();
                if (str.includes("### ")) {
                    const nextValue = markdownText.slice(0, startpoint) + markdownText.slice(startpoint + 4);
                    setMrakdownText(nextValue);
                    onTextareaChange(e, nextValue);
                    setCursorPosition((prev) => prev - 4);
                } else {
                    const nextValue = markdownText.slice(0, startpoint) + "### " + markdownText.slice(startpoint);
                    setMrakdownText(nextValue);
                    onTextareaChange(e, nextValue);
                    setCursorPosition((prev) => prev + 4);
                }
            },
            onRemove: () => { }
        },
        {
            name: "Bold",
            icon: "material-symbols:format-bold-rounded",
            onClick: (e) => {
                if (textRef.current) {
                    const curPos = textRef.current.selectionStart;
                    const nextValue = markdownText.slice(0, curPos) + "****" + markdownText.slice(curPos);
                    setMrakdownText(nextValue);
                    onTextareaChange(e, nextValue);
                    setCursorPosition((prev) => prev + 2);
                }
            },
            onRemove: () => { }
        },
        {
            name: "Italic",
            icon: "material-symbols:format-italic",
            onClick: (e) => {
                if (textRef.current) {
                    const curPos = textRef.current.selectionStart;
                    const nextValue = markdownText.slice(0, curPos) + "**" + markdownText.slice(curPos);
                    setMrakdownText(nextValue);
                    onTextareaChange(e, nextValue);
                    setCursorPosition((prev) => prev + 1);
                }
            },
            onRemove: () => { }
        },
        {
            name: "Quote",
            icon: "material-symbols:format-quote-outline-rounded",
            onClick: (e) => {
                const { startpoint, item: { str } } = getPositionFromMarkdown();
                if (str.includes("> ")) {
                    const nextValue = markdownText.slice(0, startpoint) + markdownText.slice(startpoint + 2);
                    setMrakdownText(nextValue);
                    onTextareaChange(e, nextValue);
                    setCursorPosition((prev) => prev - 2);
                } else {
                    const nextValue = markdownText.slice(0, startpoint) + "> " + markdownText.slice(startpoint);
                    setMrakdownText(nextValue);
                    onTextareaChange(e, nextValue);
                    setCursorPosition((prev) => prev + 2);
                }
            },
            onRemove: () => { }
        },
        {
            name: "Image",
            icon: "material-symbols:image-outline-rounded",
            onClick: (e) => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = async (event) => {
                    const file = event.target.files[0];
                    var accessToken = cookies.accessToken;
                    var currentdate = new Date();
                    const accessTokenExpiryTime = new Date(cookies.accessTokenExpiresAt);
                    const refreshokenExpiryTime = new Date(cookies.refreshTokenExpiresAt);
                    if (cookies.refreshToken === undefined || refreshokenExpiryTime <= currentdate) router.push('/login');
                    if (accessTokenExpiryTime <= currentdate) {
                        var myHeaders = new Headers();
                        myHeaders.append('Content-Type', 'application/json');
                        var raw = JSON.stringify({ refresh_token: cookies.refreshToken });
                        var requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: raw,
                            redirect: 'follow',
                        };
                        const response = await fetch(RefreshToken, requestOptions);
                        const result = await response.json();
                        accessToken = result.access_token;
                    }
                    try {
                        var myHeaders = new Headers();
                        myHeaders.append("Authorization", `Bearer ${accessToken}`);
                        var formdata = new FormData();
                        formdata.append("media", file, "Process-rafiki.png");
                        var requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: formdata,
                            redirect: 'follow'
                        };
                        const rep = await fetch("http://139.59.32.6:80/auth/upload-media-for-question/", requestOptions);
                        if (!rep.ok) throw new Error('Imega failed to push onto the Server!');
                        const res = await rep.json();
                        if (res) {
                            const { ImageURL } = res;
                            const formateURL = `\r\n![Alt text](${ImageURL})\r\n`;
                            const nextValue = markdownText + formateURL;
                            setMrakdownText(nextValue);
                            setTextarea(nextValue);
                            setCursorPosition((prev) => prev + formateURL.length);
                        }
                    } catch (error) {
                        console.log('error', error);
                        alert("Something went wrong! Try login again")
                    }
                }
                input.click();
            },
            onRemove: () => { }
        }
    ];
    return (
        <div className={mde.Editor}>
            <ul className={mde.tools}>
                {toolBar.map((item, i) => (
                    <li title={item.name} key={i} onClick={item.onClick}>
                        <Icon icon={item.icon} />
                    </li>
                ))}
            </ul>
            <textarea
                onBlur={handleBlur}
                onFocus={handleFocus}
                ref={textRef}
                onChange={onTextareaChange}
                value={textarea}
            />
        </div>
    );
};