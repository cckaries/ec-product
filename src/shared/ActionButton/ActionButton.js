import cx from 'classnames';

import styles from './ActionButton.module.scss';

const ActionButton = ({
  name,
  type = 'button',
  isDisabled = false,
  isAutoFocus = false,
  customClass,
  children,
  onClick = () => {},
}) => {
  return (
    <button
      className={cx(styles.Container, customClass)}
      name={name}
      type={type}
      disabled={isDisabled}
      autoFocus={isAutoFocus}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
