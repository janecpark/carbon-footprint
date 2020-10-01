import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContext from '../../../FormContext';

/** Shows a form to get information about electricity usage */

const HomeForm = () => {
  const history = useHistory();
  const { setFormData } = useContext(FormContext);
  const [homeDetails, setHomeDetails] = useState();
  const handleChange = (e) => {
    setHomeDetails(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_footprint_housing_electricity_dollars: homeDetails || 1570,
    }));
    history.push('/home2');
  };

  return (
    <div className="HomeForm">
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <h4>Electricity</h4>
          <div className="input-group">
            <input
              name="electricity"
              className="form-control shadow-none"
              id="electricity"
              type="text"
              placeholder="1500 (optional)"
              onChange={handleChange}
              autoFocus
            />
            <div className="input-group-addon">
              <label className="input-group-text">$</label>
            </div>
            <div className="input-group-addon">
              <label className="input-group-text">/yr</label>
            </div>
          </div>
        </div>
        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default HomeForm;
