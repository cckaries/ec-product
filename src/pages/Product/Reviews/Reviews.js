import { useState } from 'react';

import styles from './Reviews.module.scss';
import Ratings from '../../../shared/Ratings/Ratings';
import Review from './Review/Review';
import ReviewsModal from './ReviewsModal/ReviewsModal';

const Reviews = ({ ratingScore = 0.0, ratingCount = 0, reviews = [] }) => {
  const [isReviewModalActive, setReviewModalActive] = useState(false);
  const bodyDom = document.querySelector('body');
  const bodyWidth = bodyDom.offsetWidth;
  const isMobile = bodyWidth < 600;

  const reviewsDom = () =>
    reviews.map(review => (
      <Review {...review} key={review.reviewId} customClass={styles.Review} />
    ));

  const reviewsModalDom = () => (
    <ReviewsModal
      isActive={isReviewModalActive}
      onClose={() => setReviewModalActive(false)}
    >
      {reviewsDom()}
    </ReviewsModal>
  );

  return (
    <div className={styles.Container}>
      <h2>Reviews</h2>
      <div>
        <Ratings score={ratingScore} count={ratingCount} />
      </div>
      {!isMobile && <div className={styles.Reviews}>{reviewsDom()}</div>}
      {!!isMobile && (
        <div className={styles.Link}>
          <a href="#" onClick={() => setReviewModalActive(true)}>
            See more reviews
          </a>
        </div>
      )}
      {!!isMobile && reviewsModalDom()}
    </div>
  );
};

export default Reviews;
