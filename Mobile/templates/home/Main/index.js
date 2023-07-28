import Footer from '../../../components/layouts/footer/Footer';
import Header from '../../../components/layouts/header/Header';
import Element1 from '../Element1/element1';
import Element2 from '../Element2/element2';
import Element3 from '../Element3/element3';
import Element4 from '../Element4/element4';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Element1 />
      <Element2 />
      <Element3 />
      <Element4 />
      <Footer />
    </div>
  );
};

export default Home;
