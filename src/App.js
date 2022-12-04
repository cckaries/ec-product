import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';

import styles from './App.module.scss';
import Product from './pages/Product/Product';
import Header from './shared/Header/Header';
import data from './dummyData.json';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id, selectQty = 1) => {
    if (id === null) {
      return;
    }

    const cartCookie = Cookie.get('cart');
    const nextCartData = !!cartCookie ? JSON.parse(cartCookie) : {};
    nextCartData[id] = (nextCartData[id] ?? 0) + +selectQty;

    Cookie.set('cart', JSON.stringify(nextCartData));
    setCartCount(Object.keys(nextCartData).length);
    setCartItems(nextCartData);
  };

  const removeFromCart = id => {
    if (id === null) {
      return;
    }

    const cartCookie = Cookie.get('cart');
    const nextCartData = !!cartCookie ? JSON.parse(cartCookie) : {};
    delete nextCartData[id];

    Cookie.set('cart', JSON.stringify(nextCartData));
    setCartCount(Object.keys(nextCartData).length);
    setCartItems(nextCartData);
  };

  useEffect(() => {
    const cartCookie = Cookie.get('cart');
    const nextCartData = !!cartCookie ? JSON.parse(cartCookie) : {};

    setCartCount(Object.keys(nextCartData).length);
    setCartItems(nextCartData);
  }, []);

  return (
    <div className={styles.App}>
      <Header
        data={data}
        cartItems={cartItems}
        cartCount={cartCount}
        onRemoveFromCart={removeFromCart}
      />
      <div className={styles.Page}>
        <Product {...data} onAddToCart={addToCart} />
      </div>
    </div>
  );
};

export default App;
