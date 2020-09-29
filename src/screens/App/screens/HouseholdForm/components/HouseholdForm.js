import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContext from '../../../FormContext';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

/** Shows a form to get information about household  */

const HouseholdForm = () => {
  const { setFormData } = useContext(FormContext);
  const [house, setHouse] = useState(1);
  const history = useHistory();
  const handleChange = (value) => {
    setHouse(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_size: house || 2,
    }));
    history.push('/household3');
  };

  const labels = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5+',
  };

  return (
    <div className="HouseformForm ">
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <h4>How many people live in your household?</h4>
          <Slider
            orientation="horizontal"
            onChange={handleChange}
            min={1}
            max={5}
            tooltip={false}
            value={house}
            labels={labels}
          />
        </div>

        <button className="btn btn-success mt-4">Next</button>
      </form>
    </div>
  );
};

export default HouseholdForm;
