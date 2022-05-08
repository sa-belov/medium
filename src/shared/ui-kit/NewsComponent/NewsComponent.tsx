import styles from './NewsComponent.module.sass';
import Button from '../Button/Button';
import { ReactComponent as SaveNews } from '../../../assets/svg/add-favorite.svg';
import { ReactComponent as DotsIcon } from '../../../assets/svg/dots.svg';
import { ReactComponent as SavedNews } from '../../../assets/svg/saved-news.svg';
import { FunctionComponent } from 'react';
import { addFavorite, deleteFavorite, INews } from '../../../store/slices/newsPage';
import { useDispatch } from 'react-redux';
import Line from '../Line/Line';

interface IProps {
  news: INews;
}

const NewsComponent: FunctionComponent<IProps> = ({ news }) => {
  const dispatch = useDispatch();

  const renderButtons = () => {
    return news.favorite ? (
      <Button size={'normal'} styleType={'icon'} onClick={() => dispatch(deleteFavorite(news))}>
        <SavedNews />
      </Button>
    ) : (
      <Button size={'normal'} styleType={'icon'} onClick={() => dispatch(addFavorite(news))}>
        <SaveNews />
      </Button>
    );
  };

  return (
    <div>
      <div>
        <div className={styles.topBlock}>
          <img src={news.avatar} alt="" width="24px" height="24px" className={styles.avatar} />
          <span className={styles.author}>{news.author}</span>
        </div>
        <div className={styles.subContainer}>
          <div>
            <h2 className={styles.listHeader}>{news.title}</h2>
            <p className={styles.listParagraph}>{news.text.split(' ').slice(0, 30).join(' ')}...</p>
            <div className={styles.bottomBlock}>
              <span className={styles.timeRead}>{news.timeRead}</span>
              <div>
                {renderButtons()}
                <Button size={'normal'} styleType={'icon'}>
                  <DotsIcon />
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img src={news.img} alt="" width="112px" height="112px" />
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default NewsComponent;
