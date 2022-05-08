import { INewsList } from '../../../store/slices/favoritesPage';
import { FunctionComponent } from 'react';
import styles from './ListComponent.module.sass';
import Button from '../../../shared/ui-kit/Button/Button';
import { useNavigate } from 'react-router-dom';

interface IProps {
  list: INewsList;
}

const ListComponent: FunctionComponent<IProps> = ({ list }) => {
  const navigate = useNavigate();
  const goList = (id: number) => {
    navigate(`list/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.heading}>{list.title}</h1>
        <div className={styles.subContainer}>
          <Button size={'small'} styleType={'secondary'} onClick={() => goList(list.id)}>
            View List
          </Button>
          <span className={styles.count}>3 stories</span>
        </div>
      </div>
      <div className={styles.images}></div>
    </div>
  );
};

export default ListComponent;
