import styles from './OrderOption.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const OrderOptionDate = ({currentValue, setOrderOption}) => {
  return (
    <div className={styles.text}>
      <DatePicker 
        selected={currentValue} 
        onChange={date => setOrderOption(date)} />
    </div>
    );
};       
  
OrderOptionDate.propTypes ={ 
  currentValue: PropTypes.string,
  setOrderOption: PropTypes.func,  
};

export default OrderOptionDate;