import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Nav from './Nav';
import FormContext from '../FormContext';
import ResultContext from '../ResultContext';
import UserContext from '../UserContext';
import { RouteWithSubRoutes } from '../../../shared/components/RouteWithSubRoutes';
import routes from '../route';
import { decode } from 'jsonwebtoken';
import useLocalStorage from './LocalStorage';
import UserApi from '../UserApi';
import TokenContext from '../TokenContext';
import ActionContext from '../ActionContext';
import Footer from '../../../shared/components/Footer';

/**
 * Fetches user data
 * Handles log in and log out functions
 * Provides contexts for routes
 */

function App() {
  const [result, setResult] = useState({});
  const [token, setToken] = useLocalStorage('token');
  const [curUser, setCurUser] = useState(null);
  const [action, setAction] = useState({});
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
  useEffect(() => {
    async function getCurUser() {
      try {
        let { username } = decode(token);
        let user = await UserApi.getUser(username);
        setCurUser(user.username);
      } catch (err) {
        setCurUser(null);
      }
    }
    getCurUser();
  }, [token]);

  const handleLogOut = () => {
    setCurUser(null);
    setToken(null);
  };

  return (
    <BrowserRouter>
      <Switch>
        <FormContext.Provider value={{ formData, setFormData }}>
          <ResultContext.Provider value={{ result, setResult }}>
            <UserContext.Provider value={{ curUser, setCurUser }}>
              <TokenContext.Provider value={{ token, setToken }}>
                <ActionContext.Provider value={{ action, setAction }}>
                  <Nav handleLogOut={handleLogOut} />
                  {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))}
                </ActionContext.Provider>
              </TokenContext.Provider>
            </UserContext.Provider>
          </ResultContext.Provider>
        </FormContext.Provider>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
