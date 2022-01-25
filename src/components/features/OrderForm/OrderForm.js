import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
const OrderForm = ({tripCost, options, setOrderOption})=> (
    <Grid>
      <Row>
        {pricing.map((priceOption) => (
          <Col md={4} key={priceOption.id}>
            <OrderOption {...priceOption} currentValue={options[priceOption.id]} setOrderOption={setOrderOption}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} tripOption={options}/>
        </Col>
      </Row>
    </Grid>
  );

OrderForm.propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
    setOrderOption: PropTypes.func,
};

export default OrderForm;