import { useSelector } from 'react-redux';
import { RootState } from '../../store/store/type';
import styles from './Main.module.sass';
import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg';
import NewsComponent from '../../shared/ui-kit/NewsComponent/NewsComponent';
import Line from '../../shared/ui-kit/Line/Line';

const Main = () => {
  const { newsList } = useSelector((state: RootState) => state.news);

  const renderNews = () => {
    return newsList.map((news) => <NewsComponent key={news.id} news={news} />);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.link}>
          <div className={styles.plusIcon}>
            <PlusIcon />
          </div>
          <span className={styles.plusIconSpan}>Keep up with the latest in any topic</span>
        </div>
        <Line />
        <div className={styles.list}>{renderNews()}</div>
      </div>
    </div>
  );
};

export default Main;
