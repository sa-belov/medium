import ReactDOM from 'react-dom';
import styles from './Modal.module.sass';
import { ChangeEvent, FC } from 'react';

interface IProps {
  onClose: () => void;
}

const Modal: FC<IProps> = ({ onClose, children }) => {
  const handleClick = (e: ChangeEvent<any>) => {
    if (e.target.className === styles.shadow) onClose();
  };

  const modal = (
    <div className={styles.shadow} onClick={handleClick}>
      <div className={styles.modal}>{children}</div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.getElementsByTagName('body')[0]);
};

export default Modal;
