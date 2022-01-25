
import Icon from '../../common/Icon/Icon';
import styles from './OrderOption.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

  const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
    <div className ={styles.icon}>
      {required ? '' : (
        <div className ={styles.icon} onClick={() => setOptionValue('')}>
          <Icon name={'times-circle'}/>
        </div>
      )}
      {values.map(value => (
        <div key={value.id} className={currentValue === value.id ? styles.iconActive : styles.icon} 
        onClick={() => setOptionValue(value.id)} >
          <Icon name= {value.icon}/>
         {value.name} ({formatPrice(value.price)})
        </div>
      ))}
    </div>
  );

  OrderOptionIcons.propTypes = {
      values: PropTypes.array,
      required: PropTypes.bool,
      currentValue: PropTypes.string,
      setOptionValue: PropTypes.func,
  }

export default OrderOptionIcons;