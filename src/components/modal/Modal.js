import {useEffect} from 'react';
import {createPortal} from 'react-dom';

import {useDispatch} from 'react-redux';
import {setModal} from '../../redax/slice/slice';

import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';

const Modal = ({children}) => {
  const dispatch = useDispatch ();

  useEffect (() => {
    window.addEventListener ('keydown', handleEsc);
    const body = document.querySelector ('body');
    body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener ('keydown', handleEsc);
      const body = document.querySelector ('body');
      body.style.overflow = 'auto';
    };
  });

  const handleEsc = evt => {
    if (evt.code === 'Escape') {
      dispatch (setModal ());
    }
  };

  const handleBackdropClick = evt => {
    if (evt.target !== evt.currentTarget) return;
    dispatch (setModal ());
  };

  const modalRoot = document.querySelector ('#modal-root');
  return createPortal (
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal}>
        <button
          type="button"
          className={styles.closeModal}
          onClick={() => dispatch (setModal ())}
        >
          <svg className={styles.crosIcon} aria-label="icon-cros">
              <use href={sprite + '#icon-cros'} />
            </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
