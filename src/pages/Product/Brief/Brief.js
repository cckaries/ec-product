import { useState, useRef } from 'react';

import styles from './Brief.module.scss';
import ActionButton from '../../../shared/ActionButton/ActionButton';
import Ratings from '../../../shared/Ratings/Ratings';
import Image from '../../../shared/Image/Image';
import Select from '../../../shared/Select/Select';

const Brief = ({
  imgSrc = '',
  id,
  title = '',
  ratingScore = 0.0,
  ratingCount = 0,
  price = 0,
  qtyLimit = 5,
  onButtonClick = () => {},
}) => {
  const [selectQty, setSelectQty] = useState(1);
  const localePrice = Number.parseFloat(price).toFixed(2).toLocaleString('en');

  const qtySelectDom = (
    <Select
      name={`${title}-qty`}
      id={`${title}-qty`}
      value={selectQty}
      customClass={styles.Select}
      onChange={setSelectQty}
    >
      {Array.from(Array(qtyLimit).keys()).map(key => {
        const val = key + 1;

        return (
          <option key={key} value={val}>
            {val}
          </option>
        );
      })}
    </Select>
  );

  return (
    <div className={styles.Container}>
      <Image
        src={imgSrc}
        width="300px"
        height="300px"
        minWidth="300px"
        customClass={styles.Image}
      />
      <div className={styles.Info}>
        <h1>{title}</h1>
        <div className={styles.Ratings}>
          <Ratings score={ratingScore} count={ratingCount} />
        </div>
        <div className={styles.Price}>{localePrice}</div>
        <div className={styles.Qty}>Qty: {qtySelectDom}</div>
        <div className={styles.Buttons}>
          <ActionButton
            customClass={styles.AddCartButton}
            onClick={() => onButtonClick(id, selectQty)}
          >
            Add to Cart
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default Brief;
