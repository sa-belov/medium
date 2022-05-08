import Modal from '../Modal';
import Button from '../../Button/Button';
import { FunctionComponent, useState } from 'react';
import styles from './CreateListModal.module.sass';
import Input from '../../Input/Input';

interface IProps {
  onClose: () => void;
}

const CreateListModal: FunctionComponent<IProps> = ({ onClose }) => {
  const [state, setState] = useState({
    draftList: generateEmptyList(),
    isDescription: false,
  });

  const handleChange = (value: string, name: string) => {
    setState((prev) => ({
      ...prev,
      draftList: { ...prev.draftList, [name]: value },
    }));
    console.log(name, value);
  };

  const showDescription = () => {
    setState((prev) => ({
      ...prev,
      isDescription: true,
    }));
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.modalContainer}>
        <div className={styles.topContainer}>
          <h1 className={styles.heading}>Create new list</h1>
          <div className={styles.inputs}>
            <Input
              value={state.draftList.title}
              name={'title'}
              onChange={handleChange}
              placeholder={'Give at a name'}
              type={'text'}
            />
            {state.isDescription ? (
              <Input
                value={state.draftList.description}
                name={'description'}
                placeholder={'Description'}
                type={'text'}
                onChange={handleChange}
              />
            ) : (
              <Button size={'normal'} styleType={'link'} onClick={showDescription}>
                Add a description
              </Button>
            )}
          </div>
        </div>
        <div className={styles.buttons}>
          <Button size={'normal'} styleType={'secondary'} onClick={onClose}>
            Cancel
          </Button>
          <Button size={'normal'} styleType={'primary'}>
            Create
          </Button>
        </div>
      </div>
    </Modal>
  );
};

const generateEmptyList = () => ({ title: '', description: '', id: -1, private: false });

export default CreateListModal;
