import styles from './Header.module.scss';
import Cart from './Cart/Cart';

const Header = ({
  data = {},
  cartCount = 0,
  cartItems = {},
  onRemoveFromCart = () => {},
}) => {
  return (
    <header>
      <div className={styles.Left}></div>
      <div className={styles.Right}>
        <Cart
          data={data}
          count={cartCount}
          items={cartItems}
          onRemoveFromCart={onRemoveFromCart}
        />
      </div>
    </header>
  );
};

export default Header;
