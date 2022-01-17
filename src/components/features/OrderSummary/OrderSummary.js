import React from 'react';
import styles from '../OrderSummary/OrderSummary.module.scss'
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderSummary = ({tripCost, tripOption}) => (
    <h2 className = {styles.component}>total: <strong>{formatPrice(calculateTotal(tripCost, tripOption))}</strong></h2>
);

OrderSummary.propTypes = {
    tripCost: PropTypes.string,
    tripOption: PropTypes.object,
};

export default OrderSummary;