import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContext from '../../../FormContext';

/** Form to get information about transportation usage in miles*/

const TravelForm = () => {
  const history = useHistory();
  const { setFormData } = useContext(FormContext);
  const [transport, setTransport] = useState();
  const handleChange = (e) => {
    setTransport(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_footprint_transportation_miles1: transport || 14900,
    }));
    history.push('/transport2');
  };

  return (
    <div className="TravelForm">
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <h4>Gasoline</h4>
          <div className="input-group">
            <input
              autoFocus
              className="form-control shadow-none"
              type="text"
              id="gasoline"
              placeholder="13,800 (optional)"
              onChange={handleChange}
            />
            <label className="input-group-text">mi/yr</label>
            <div className="input-group-addon"></div>
          </div>
        </div>
        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default TravelForm;
