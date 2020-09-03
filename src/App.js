import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import Nav from './components/Nav';
import FormContext from './FormContext';
import ResultContext from './ResultContext';

function App() {
  const [result, setResult] = useState({});
  const [formData, setFormData] = useState({
    input_location_mode: 1,
    input_location: '',
    input_size: 2,
    input_income: 2,
    input_footprint_transportation_miles1: 14900,
    input_footprint_transportation_publictrans: 452,
    input_footprint_housing_electricity_dollars: 1570,
    input_footprint_housing_watersewage: 254,
    input_footprint_shopping_food_meatfisheggs_default: 1086,
  });
  console.log(formData);
  return (
    <BrowserRouter>
      <FormContext.Provider value={{ formData, setFormData }}>
        <ResultContext.Provider value={{ result, setResult }}>
          <Nav />
          <Routes />
        </ResultContext.Provider>
      </FormContext.Provider>
    </BrowserRouter>
  );
}

export default App;
