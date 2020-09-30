import React from 'react';
import UserContext from '../UserContext';
import FormContext from '../FormContext';
import ResultContext from '../ResultContext';
import ActionContext from '../ActionContext';
import TokenContext from '../TokenContext';

/** Utilities to provide context for testing purposes */

const demoUser = {
  username: 'test',
  password: 'test',
  email: 'test@test.com',
};

const demoFormData = {
  input_location_mode: 1,
  input_location: '89148',
  input_size: 2,
  input_income: 2,
  input_footprint_transportation_miles1: 14900,
  input_footprint_transportation_publictrans: 452,
  input_footprint_housing_electricity_dollars: 1570,
  input_footprint_housing_watersewage: 254,
  input_footprint_shopping_food_meatfisheggs_default: 1086,
};

const demoResult = {
  food: 3,
  housing: 4,
  transport: 5,
  total: 12,
};

const demoAction = {
  public_transport: 1,
  carpool: 1,
  low_carbon_diet: 1,
  organic: 1,
  fridge: 1,
  green_electricity: 1,
};

const UserProvider = ({ children, curUser = demoUser }) => (
  <UserContext.Provider value={{ curUser }}>{children}</UserContext.Provider>
);

const ResultProvider = ({ children, result = demoResult }) => (
  <ResultContext.Provider value={{ result }}>{children}</ResultContext.Provider>
);

const FormProvider = ({ children, formData = demoFormData }) => (
  <FormContext.Provider value={{ formData }}>{children}</FormContext.Provider>
);

const ActionProvider = ({ children, action = demoAction }) => (
  <ActionContext.Provider value={{ action }}>{children}</ActionContext.Provider>
);

const TokenProvider = ({ children, setToken }) => (
  <TokenContext.Provider value={{ setToken }}>{children}</TokenContext.Provider>
);

export { UserProvider, ResultProvider, FormProvider, ActionProvider, TokenProvider };
