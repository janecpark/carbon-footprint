import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import ocean from '../images/ocean.jpg';
import Slider from 'react-rangeslider';
import 'react-rangeslider';
import FormContext from '../../../FormContext';

const WaterForm = () => {
  const history = useHistory();
  const { formData, setFormData } = useContext(FormContext);
  const [waterForm, setWaterForm] = useState(0);
  const handleChange = (value) => {
    setWaterForm(value);
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((el) => ({
      ...el,
      input_footprint_housing_watersewage: waterForm,
    }));
    console.log(formData);
    history.push('/food1');
  };

  const labels = {
    0: '0',
    84: '1x',
    168: '2x',
    254: '3x',
  };

  // const style = {
  //   backgroundImage: `url('${ocean}`,
  //   height: '100vh',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   width: '100vw',
  // };

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
