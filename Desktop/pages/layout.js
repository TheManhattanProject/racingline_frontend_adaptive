import Pagination from '@/components/layouts/Pagination/index';
import Sidebar from '@/components/layouts/Sidebar/Sidebar';
import Footer from '@/components/layouts/footer/Footer';
import Leaderboard from '@/components/layouts/leaderboard';
import Marquee from '@/components/layouts/marquee/Marquee';
import PopularQuestion from '@/components/layouts/popularQuestionBoard/index';
import HeaderForAsk from '@/templates/ask/headerForAsk_/Header';
// import AskQuestion from '@/templates/ask/AskQuestion/AskQuestion';
import HeadingForHotQues from '@/templates/hotQuestionList/HeadingforHotQuest/Heading';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const layouts = {
    '/': {
        ui: (params) => home_ui(params),
        left: () => null,
        top: () => null,
        right: () => null,
        bottom: () => null,
        footer: <Footer />
    },
    '/auth/login': {
        ui: (params) => home_ui(params),
        left: () => null,
        top: () => null,
        right: () => null,
        bottom: () => null,
        footer: null
    },
    '/auth/signup': {
        ui: (params) => home_ui(params),
        left: () => null,
        top: () => null,
        right: () => null,
        bottom: () => null,
        footer: null
    },
    '/question_list': {
        ui: (params) => Question_ui(params),
        left: <Sidebar />,
        top: <Marquee />,
        right: <Leaderboard />,
        bottom: <Pagination />,
        footer: <Footer />
    },
    '/hot_questions_list': {
        ui: (params) => Question_ui(params),
        left: <Sidebar />,
        top: <HeadingForHotQues />,
        right: <Leaderboard />,
        bottom: <Pagination />,
        footer: <Footer />
    },
    '/ask': {
        ui: (params) => Question_ui(params),
        left: <Sidebar />,
        top: <HeaderForAsk />,
        right: <PopularQuestion />,
        bottom: null,
        footer: <Footer />
    },
    '/polls': {
        ui: (params) => Question_ui(params),
        left: <Sidebar />,
        top: <Marquee />,
        right: <Leaderboard />,
        bottom: <Pagination />,
        footer: <Footer />
    },
    '*': {
        ui: (params) => home_ui(params),
        left: () => null,
        top: () => null,
        right: () => null,
        bottom: () => null,
        footer: null
    },
};

export default function Layout({ children }) {
    const pathname = usePathname()
    const { ui, left, top, right, bottom, footer } = layouts[pathname] || layouts['*'];
    return ui({ left, top, right, bottom, children });
}


/**
 * @custom layout uis
 */

export const Page = React.createContext();

function home_ui({ left, top, right, bottom, children }) {
    return <>{children}</>
}

function Question_ui({ left, top, right, bottom, footer, children }) {
    const [page, setPage] = useState({ CurrentPage: 1, NoOfPages: 1 })
    return <Page.Provider value={[page, setPage]}>
        <div className='layout'>
            <div className='layoutHead'>{top}</div>
            <div className='layoutContainer'>
                <div className='layoutLeft'>{left}</div>
                <div className='layoutCenter'>{children}</div>
                <div className='layoutRight'>{right}</div>
            </div>
            <div className='pagination'>{bottom}</div>
        </div>
        {footer}
    </Page.Provider>
}