import React, { useContext, useState, useEffect } from 'react';
import ResultContext from '../ResultContext';
import Alert from '../Alert';

const Result = () => {
  const { result, setResult } = useContext(ResultContext);

  return (
    <div className="container">
      Results page
      <br />
      <p>Food: {result.response.result_food_total}</p>
      <p>Services: {result.response.result_services_total}</p>
      <p>Housing: {result.response.result_housing_total}</p>
      <p>Transport: {result.response.result_transport_total}</p>
      <p>Goods: {result.response.result_goods_total}</p>
      <p>Total: {result.response.result_grand_total}</p>
      <button className="btn btn-primary"> Save Results</button>
    </div>
  );
};

export default Result;
