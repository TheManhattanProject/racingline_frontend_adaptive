import Sidebar from "../../components/layouts/Sidebar/Sidebar"

export default function Layout({ children }) {
    const layouts = {
        '/question_list': { left: <Sidebar />, top: '', right: '', centre: '' },
        '/ask': { left: <Sidebar />, top: '', right: '', centre: '' },
        '/hot_questions_list': { left: <Sidebar />, top: '', right: '', centre: '' },
        '/polls': { left: <Sidebar />, top: '', right: '', centre: '' },
        '/search': { left: <Sidebar />, top: '', right: '', centre: '' }
    }
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}


import styles from "/components/question_list/DesktopVersion/Main/index.module.scss";
import Sidebar from "../../../Sidebar/Sidebar";
import Questions from "/components/question_list/DesktopVersion/Questions/Questions";
import Leaderboard from "../../../hotquestions/DesktopVersion/Leaderboard/Leaderboard";
import Pagechange from "/components/question_list/DesktopVersion/Pagechange/PageChange";
import Footer from "/components/question_list/DesktopVersion/Footer/Footer";
import Index from "/components/question_list/DesktopVersion/Marquee/Index";
import MarqueeHeader from "../../../Marquee/Marquee";

const DesktopView = (props) => {
  console.log(props);
  return (
    
  );
};
export default DesktopView;
