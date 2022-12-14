import { format, getTime } from 'date-fns';
import cx from 'classnames';

import styles from './Review.module.scss';
import Ratings from '../../../../shared/Ratings/Ratings';
import Image from '../../../../shared/Image/Image';


const Review = ({
  username = '',
  ratingScore = 0.0,
  description = '',
  dateTs = 0,
  images = [],
  customClass,
}) => {
  return (
    <div className={cx(styles.Container, customClass)}>
      <div className={styles.Title}>
        <div className={styles.Left}>
          <div className={styles.Name}>{username}</div>
          <div className={styles.Rating}>
            <Ratings score={ratingScore} />
          </div>
        </div>
        <div className={styles.Date}>
          {!!dateTs && format(getTime(dateTs * 1000), 'MMM d, yyyy')}
        </div>
      </div>
      <p>{description}</p>
      {!!images.length && (
        <div className={styles.Images}>
          {images.map((img, idx) => (
            <Image key={idx} src={img} width="100px" height="80px" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
