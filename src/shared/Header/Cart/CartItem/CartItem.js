import styles from './CartItem.module.scss';
import Image from '../../../Image/Image';

const CartItem = ({ imgSrc = '', qty = 0 }) => {
  return (
    <div className={styles.Container}>
      <Image src={imgSrc} width="3rem" height="3rem" min-width="3rem" />
      <span>Qty: {qty}</span>
    </div>
  );
};

export default CartItem;
