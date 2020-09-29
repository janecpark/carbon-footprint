import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContext from '../../../FormContext';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

/** Shows a form to get information about household income  */

const IncomeForm = () => {
  const { setFormData } = useContext(FormContext);
  const history = useHistory();
  const [income, setIncome] = useState();
  const handleChange = (value) => {
    setIncome(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_income: income || 2,
    }));
    history.push('/transport1');
  };

  const labels = {
    1: 'Average',
    2: '<10k',
    3: '10k',
    4: '20k',
    5: '30k',
    6: '40k',
    7: '50k',
    8: '60k',
    9: '80k',
    10: '100k',
    11: '120+',
  };

  return (
    <div className="HouseformForm">
      <form onSubmit={handleSubmit} className="container">
        <h4>What is your gross annual household income?</h4>
        <Slider
          orientation="horizontal"
          onChange={handleChange}
          min={1}
          max={11}
          tooltip={false}
          value={income}
          labels={labels}
        />
        <button className="btn btn-success mt-4">Next</button>
      </form>
    </div>
  );
};

export default IncomeForm;
