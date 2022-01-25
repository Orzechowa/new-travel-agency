import styles from './OrderOption.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({limits, price, currentValue, setOptionValue}) => (
    <div className={styles.number}>
      <input
        className={styles.inputSmall}
        type='number'
        value={currentValue}
        min={limits.min}
        max={limits.max}
        onChange={event => event.currentTarget.value ? setOptionValue(parseInt(event.currentTarget.value)):false}>
      </input> {`Price: ${formatPrice(price)}`}
    </div>
  );
  
OrderOptionNumber.propTypes ={
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.number,
  limits: PropTypes.object,
  price: PropTypes.string,    
};
  export default OrderOptionNumber;