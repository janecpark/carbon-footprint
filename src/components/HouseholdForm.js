import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContext from '../FormContext';
const HouseholdForm = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [house, setHouse] = useState(1);
  const history = useHistory();
  const handleChange = (e) => {
    setHouse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_size: house,
    }));
    history.push('/household3');
  };
  
  return (
    <div className="HouseformForm container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="household">
            How many people live in your household?
          </label>
          <select
            name="household"
            className="form-control"
            id="household"
            onChange={handleChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
        </div>

        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default HouseholdForm;
