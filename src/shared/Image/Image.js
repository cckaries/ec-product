import { useEffect, useRef } from 'react';
import cx from 'classnames';

import styles from './Image.module.scss';

const Image = ({
  src = '',
  width = 100,
  height = 100,
  minWidth = 0,
  minHeight = 0,
  maxWidth = 0,
  maxHeight = 0,
  alt = '',
  title = '',
  customClass,
  onClick = () => {},
}) => {
  const containerRef = useRef();

  useEffect(() => {
    containerRef.current.style.width = width;
    containerRef.current.style.height = height;

    if (!!minWidth) {
      containerRef.current.style.minWidth = minWidth;
    }

    if (!!minHeight) {
      containerRef.current.style.minHeight = minHeight;
    }

    if (!!maxWidth) {
      containerRef.current.style.maxWidth = maxWidth;
    }

    if (!!maxHeight) {
      containerRef.current.style.maxHeight = maxHeight;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cx(styles.Container, customClass)}
      onClick={onClick}
    >
      <img src={src} alt={alt} title={title} />
    </div>
  );
};

export default Image;
