import { useState, useEffect } from 'react';

import styles from './Reviews.module.scss';
import Ratings from '../../../shared/Ratings/Ratings';
import Select from '../../../shared/Select/Select';
import Review from './Review/Review';
import ReviewsModal from './ReviewsModal/ReviewsModal';

const filterOptions = ['all', '1', '2', '3', '4', '5'];
const sortOptions = ['ratings', 'time'];

const Reviews = ({ ratingScore = 0.0, ratingCount = 0, reviews = [] }) => {
  const [isReviewModalActive, setReviewModalActive] = useState(false);
  const [filterOption, setFilterOption] = useState('all');
  const [sortOption, setSortOption] = useState('ratings');
  const [processedReviews, setProcessedReviews] = useState(reviews);
  const bodyDom = document.querySelector('body');
  const bodyWidth = bodyDom.offsetWidth;
  const isMobile = bodyWidth < 600;

  useEffect(() => {
    let nextProcessedReviews = [...reviews];

    if (filterOption !== 'all') {
      nextProcessedReviews = nextProcessedReviews.filter(
        review => review.ratingScore == filterOption
      );
    }

    setProcessedReviews(nextProcessedReviews);
  }, [filterOption]);

  useEffect(() => {
    let nextProcessedReviews = [...processedReviews];

    nextProcessedReviews.sort((a, b) => {
      switch (sortOption) {
        case 'time':
          return a.dateTs - b.dateTs;
        default:
          return a.ratingScore - b.ratingScore;
      }
    });

    setProcessedReviews(nextProcessedReviews);
  }, [sortOption]);

  const reviewsDom = () =>
    processedReviews.map(review => (
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
      <div className={styles.Top}>
        <div className={styles.Left}>
          <h2>Reviews</h2>
          <div>
            <Ratings score={ratingScore} count={ratingCount} />
          </div>
        </div>
        <div className={styles.Right}>
          <Select
            name="filter"
            id="filter"
            value={filterOption}
            customClass={styles.Select}
            onChange={setFilterOption}
          >
            {filterOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Select
            name="sort"
            id="sort"
            value={sortOption}
            customClass={styles.Select}
            onChange={setSortOption}
          >
            {sortOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
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
