import { useSelector } from 'react-redux';
import { RootState } from '../../store/store/type';
import NewsComponent from '../../shared/ui-kit/NewsComponent/NewsComponent';
import styles from './Favorites.module.sass';
import Button from '../../shared/ui-kit/Button/Button';
import Line from '../../shared/ui-kit/Line/Line';
import { useState } from 'react';
import CreateListModal from '../../shared/ui-kit/Modal/CreateListModal/CreateListModal';
import ListComponent from './ListComponent/ListComponent';

const Favorites = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { newsList } = useSelector((state: RootState) => state.news);
  const { newsLists } = useSelector((state: RootState) => state.favorites);

  const renderNews = () => {
    return newsList.filter((news) => news.favorite).map((news) => <NewsComponent key={news.id} news={news} />);
  };

  const renderLists = () => {
    return newsLists.map((list) => <ListComponent list={list} />);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1 className={styles.heading}>Your lists</h1>
        <Button size={'normal'} styleType={'primary'} onClick={() => setModal(true)}>
          New list
        </Button>
      </div>
      <Line />
      <div className={styles.lists}>{renderLists()}</div>
      {/*<div className={styles.list}>{renderNews()}</div>*/}
      {modal && <CreateListModal onClose={() => setModal(false)} />}
    </div>
  );
};

export default Favorites;
