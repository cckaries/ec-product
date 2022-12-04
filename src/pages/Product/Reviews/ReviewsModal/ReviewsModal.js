import styles from './ReviewsModal.module.scss';
import Modal from '../../../../shared/Modal/Modal';

const ReviewsModal = ({ isActive = false, children, onClose = () => {} }) => {
  return (
    <Modal isActive={isActive} onBackdropClick={onClose}>
      <div className={styles.Container}>
        <div className={styles.Top}>
          <div>Reviews</div>
          <button className={styles.CloseButton} onClick={onClose}></button>
        </div>
        <div className={styles.Reviews}>{children}</div>
      </div>
    </Modal>
  );
};

export default ReviewsModal;
