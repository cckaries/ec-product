import cx from 'classnames';

import styles from './Ratings.module.scss';

const Ratings = ({ score = 0.0, count = 0, onClick = () => {} }) => {
  const roundedRatings = Math.round(score);

  return (
    <div className={styles.Container}>
      <span className={cx(styles.Star, roundedRatings > 0 && styles.active)} />
      <span className={cx(styles.Star, roundedRatings > 1 && styles.active)} />
      <span className={cx(styles.Star, roundedRatings > 2 && styles.active)} />
      <span className={cx(styles.Star, roundedRatings > 3 && styles.active)} />
      <span className={cx(styles.Star, roundedRatings > 4 && styles.active)} />
      {!!count && <div className={styles.Count}>({count})</div>}
    </div>
  );
};

export default Ratings;
