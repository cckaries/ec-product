import cx from 'classnames';

import styles from './Backdrop.module.scss';

const Backdrop = ({ isActive, customClass, onClick = () => {} }) => {
  return (
    <div
      className={cx(styles.Container, customClass, isActive && styles.active)}
      onClick={onClick}
    />
  );
};

export default Backdrop;
