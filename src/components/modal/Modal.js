import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setModal } from '../../redax/slice/slice';

import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      const body = document.querySelector('body');
      body.style.overflow = 'auto';
    };
  });

  const closeModal = () => {
    dispatch(setModal());
    navigate('/catalog');
  };

  const handleEsc = evt => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = evt => {
    if (evt.target !== evt.currentTarget) return;
    closeModal();
  };

  const modalRoot = document.querySelector('#modal-root');
  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal}>
        <button type="button" className={styles.closeModal} onClick={closeModal}>
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
