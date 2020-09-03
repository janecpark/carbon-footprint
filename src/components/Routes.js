import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import LocationForm from './LocationForm';
import HouseholdForm from './HouseholdForm';
import IncomeForm from './IncomeForm';
import TravelForm from './TravelForm';
import PublicTransportForm from './PublicTransportForm';
import HomeForm from './HomeForm';
import FoodForm from './FoodForm';
import Result from './Result';
import WaterForm from './WaterForm';
import Signup from './Signup'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/household1">
        <LocationForm />
      </Route>
      <Route exact path="/household2">
        <HouseholdForm />
      </Route>
      <Route exact path="/household3">
        <IncomeForm />
      </Route>
      <Route exact path="/transport1">
        <TravelForm />
      </Route>
      <Route exact path="/transport2">
        <PublicTransportForm />
      </Route>
      <Route exact path="/home1">
        <HomeForm />
      </Route>
      <Route exact path="/home2">
        <WaterForm />
      </Route>
      <Route exact path="/food1">
        <FoodForm />
      </Route>
      <Route exact path="/result">
        <Result />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
};

export default Routes;
