import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContext from '../../../FormContext';
import ResultContext from '../../../ResultContext';
import CarbonApi from '../../../CarbonApi';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import getTotal from './CalHelper';
import ActionContext from '../../../ActionContext';

const FoodForm = () => {
  const history = useHistory();
  const { formData, setFormData } = useContext(FormContext);
  const { setResult } = useContext(ResultContext);
  const { setAction } = useContext(ActionContext);
  const [food, setFood] = useState(0);
  const handleChange = (value) => {
    setFood(value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_footprint_shopping_food_meatfisheggs_default: food || 1086,
    }));
    try {
      let res = await CarbonApi.travelData(formData);
      let data = JSON.parse(res.result);
      if (data.response.hasOwnProperty('failed')) {
        setResult((e) => ({ ...e, errors: data.response.error_message}));
      }else{
        setResult({
          food: Number(parseFloat(data.response.result_food_total).toFixed(2)),
          housing: Number(
            parseFloat(data.response.result_housing_total).toFixed(2)
          ),
          transport: Number(
            parseFloat(data.response.result_transport_total).toFixed(2)
          ),
          total: getTotal(
            data.response.result_food_total,
            data.response.result_housing_total,
            data.response.result_transport_total
          ),
        });
        let data_result = JSON.parse(data.response.result_takeaction_pounds);
        setAction({
          public_transport: data_result.take_public_transportation,
          carpool: data_result.carpool_to_work,
          low_carbon_diet: data_result.low_carbon_diet,
          organic: data_result.go_organic,
          fridge: data_result.energy_star_fridge,
          green_electricity: data_result.purchase_green_electricity,
        });
      }
    } catch (err) {
      setResult((e) => ({ ...e, errors: { ...err } }));
    }
    history.push('/result');
  }
  const labels = {
    0: '0',
    362: 'Average',
    724: ' 2x',
    1086: '3x',
  };

  return (
    <div>
      <form className="slider custom-labels container" onSubmit={handleSubmit}>
        <h4>
          How much meat, fish, eggs does the average person in your household
          eat?
        </h4>
        <Slider
          orientation="horizontal"
          onChange={handleChange}
          min={0}
          max={1086}
          tooltip={false}
          value={food}
          labels={labels}
        />
        <button className="btn btn-success mt-3">Get results</button>
      </form>
    </div>
  );
};

export default FoodForm;
