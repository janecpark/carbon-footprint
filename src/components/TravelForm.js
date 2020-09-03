import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import gas from '../images/gas.jpg';
import FormContext from '../FormContext';

const TravelForm = () => {
  const history = useHistory();
  const { formData, setFormData } = useContext(FormContext);
  const [transport, setTransport] = useState();
  const handleChange = (e) => {
    setTransport(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_footprint_transportation_miles1: transport,
    }));
    history.push('/transport2');
  };

  const style = {
    backgroundImage: `url('${gas}`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
  };

  return (
    <div className="TravelForm">
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group container">
          <label htmlFor="gasoline">Gasoline</label>
          <div className="input-group">
            <input
              className="form-control"
              id="gasoline"
              placeholder="13,800"
              onChange={handleChange}
            />
            <label className="input-group-text">mi/yr</label>
          </div>
        </div>
        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default TravelForm;
