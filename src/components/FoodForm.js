import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContext from '../FormContext';
import ResultContext from '../ResultContext';
import CarbonApi from '../CarbonApi';
import Slider from 'react-rangeslider';
import './FoodForm.css';
import 'react-rangeslider/lib/index.css';

const FoodForm = () => {
  const history = useHistory();
  const { formData, setFormData } = useContext(FormContext);
  const { result, setResult } = useContext(ResultContext);
  const [food, setFood] = useState(0);
  const handleChange = (value) => {
    setFood(value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_footprint_shopping_food_meatfisheggs_default: food,
    }));
    console.log(formData);
    let res = await CarbonApi.travelData(formData);
    let parsedResult = JSON.parse(res.result);
    setResult(parsedResult);
    console.log(parsedResult);
    history.push('/result');
  }
  const labels = {
    0: '0',
    362: 'Average',
    724: ' 2x',
    1086: '3x',
  };
  // const style = {
  //   backgroundImage: `url(${chicken})`,
  //   height: '100vh',
  //   backgroundSize: 'cover',
  //   width: '100vw',
  // };
  return (
    <form className="slider custom-labels container" onSubmit={handleSubmit}>
      <h4> How much meat, fish, eggs does the average person in your household eat?</h4>
      <Slider
        orientation="horizontal"
        onChange={handleChange}
        min={0}
        max={1086}
        tooltip={false}
        value={food}
        labels={labels}
      />
      <button className='btn btn-success mt-3'>Get results</button>
    </form>
  );
};

export default FoodForm;
