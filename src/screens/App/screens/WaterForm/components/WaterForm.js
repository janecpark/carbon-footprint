import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Slider from 'react-rangeslider';
import 'react-rangeslider';
import FormContext from '../../../FormContext';

/** Form to get information about water usage  */

const WaterForm = () => {
  const history = useHistory();
  const { setFormData } = useContext(FormContext);
  const [waterForm, setWaterForm] = useState(0);
  const handleChange = (value) => {
    setWaterForm(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_footprint_housing_watersewage: waterForm || 254,
    }));
    history.push('/food1');
  };

  const labels = {
    0: '0',
    84: '1x',
    168: '2x',
    254: '3x',
  };

  return (
    <div className="WaterForm">
      <form onSubmit={handleSubmit} className="container">
        <h4>Water Usage to similar households</h4>
        <Slider
          orientation="horizontal"
          onChange={handleChange}
          min={0}
          max={254}
          tooltip={false}
          value={waterForm}
          labels={labels}
        />
        <button className="btn btn-success mt-3">Next</button>
      </form>
    </div>
  );
};

export default WaterForm;
