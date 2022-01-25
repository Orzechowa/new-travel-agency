import styles from './OrderOption.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue}) => (
      <input
        className={styles.inputSmall}
        type='number'
        onChange={(event) => setOptionValue(event.currentTarget.value)}>
      </input> 
);
  
OrderOptionText.propTypes ={
  setOptionValue: PropTypes.func,   
};
  export default OrderOptionText;