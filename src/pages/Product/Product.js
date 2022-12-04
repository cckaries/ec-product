import styles from './Product.module.scss';
import Brief from './Brief/Brief';
import Reviews from './Reviews/Reviews';

const Product = ({
  imgSrc = '',
  id,
  title = '',
  ratingScore = 0.0,
  ratingCount = 0,
  price = 0,
  qtyLimit = 0,
  reviews = [],
  onAddToCart = () => {},
}) => {
  return (
    <div className={styles.Container}>
      <Brief
        imgSrc={imgSrc}
        id={id}
        title={title}
        ratingScore={ratingScore}
        ratingCount={ratingCount}
        price={price}
        qtyLimit={qtyLimit}
        onButtonClick={onAddToCart}
      />
      <Reviews
        ratingScore={ratingScore}
        ratingCount={ratingCount}
        reviews={reviews}
      />
    </div>
  );
};

export default Product;
