import cx from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';

import styles from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({
  isActive = false,
  timeout = 500,
  children = null,
  onBackdropClick = () => {},
}) => {
  return (
    <div className={cx(styles.Container, isActive ? styles.active : 'null')}>
      <Backdrop isActive={isActive} onClick={onBackdropClick} />
      <CSSTransition
        in={isActive}
        timeout={timeout}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: styles.opening,
          exitActive: styles.closing,
        }}
      >
        <div className={styles.Content}>{children}</div>
      </CSSTransition>
    </div>
  );
};

export default Modal;
