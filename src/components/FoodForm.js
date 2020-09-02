import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContext from '../FormContext';
import ResultContext from '../ResultContext';
import CarbonApi from '../CarbonApi';

const FoodForm = () => {
  const history = useHistory();
  const { formData, setFormData } = useContext(FormContext);
  const { result, setResult } = useContext(ResultContext);
  const [food, setFood] = useState();
  const handleChange = (e) => {
    setFood(e.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_footprint_shopping_food_meatfisheggs_default: food,
    }));
    let res = await CarbonApi.travelData(formData);
    let parsedResult = JSON.parse(res.result);
    setResult(parsedResult);
    history.push('/result');
  }

  // const style = {
  //   backgroundImage: `url(${chicken})`,
  //   height: '100vh',
  //   backgroundSize: 'cover',
  //   width: '100vw',
  // };

  return (
    <div className="FoodForm">
      <form onSubmit={handleSubmit} className="range-field w-75 container">
        <p> How much does the average person in your household eat?</p>
        <p>Meat, fish, eggs</p>
        <div className="form-group">
          <input
            onChange={handleChange}
            type="range"
            className="form-control-range border-0"
            min="0"
            max="100"
            id="meat"
          />
          <label className="float-left">0</label>
          <label className="float-right">3x</label>
        </div>
        <br />
        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default FoodForm;
