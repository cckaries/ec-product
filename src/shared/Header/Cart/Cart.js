import { useState, useRef } from 'react';
import cx from 'classnames';
import useOnClickOutside from 'use-onclickoutside';

import styles from './Cart.module.scss';
import ActionButton from '../../ActionButton/ActionButton';
import CartItem from './CartItem/CartItem';

const Cart = ({
  data = {},
  count = 0,
  items = {},
  onRemoveFromCart = () => {},
}) => {
  const [isCartExpanded, setCartExpanded] = useState(false);
  const cartRef = useRef();
  const cartItemsKeys = Object.keys(items);

  useOnClickOutside(cartRef, e => {
    if (!cartRef.current.contains(e.target) && isCartExpanded)
      setCartExpanded(false);
  });

  return (
    <div
      ref={cartRef}
      className={cx(styles.Container, isCartExpanded && styles.expanded)}
      onClick={() => setCartExpanded(!isCartExpanded)}
    >
      <div className={styles.CartIcon}>
        <span className={styles.Icon}>🛍</span>
        {!!count && <span className={styles.Badge}>{count}</span>}
      </div>
      <div className={styles.Menu}>
        {cartItemsKeys.map(key => (
          <CartItem key={key} imgSrc={data.imgSrc} qty={items[key]} />
        ))}
        <ActionButton
          customClass={styles.RemoveButton}
          isDisabled={!cartItemsKeys.length}
          onClick={() => onRemoveFromCart(cartItemsKeys[0])}
        >
          Remove
        </ActionButton>
      </div>
    </div>
  );
};

export default Cart;
