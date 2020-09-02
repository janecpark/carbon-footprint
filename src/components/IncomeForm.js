import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import income from '../images/income.jpg';

const HouseholdForm = () => {
  const INITIAL_STATE = {
    location: '',
    household: '1',
    income: 'average',
  };
  const [house, setHouse] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHouse((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHouse(INITIAL_STATE);
  };
  const style = {
    backgroundImage: `url('${income}`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
  };

  return (
    <div className="HouseformForm" >
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="income">
            What is your gross annual household income?
          </label>
          <select
            name="income"
            className="form-control"
            id="income"
            onChange={handleChange}
          >
            <option>Average</option>
            <option>Less than 10k</option>
            <option>10k</option>
            <option>20k</option>
            <option>40k</option>
            <option>50k</option>
            <option>60k</option>
            <option>70k</option>
            <option>80k</option>
            <option>100k</option>
            <option>More than 120k</option>
          </select>
        </div>

        <Link to="/transport1" className="btn btn-success">
          Next
        </Link>
      </form>
    </div>
  );
};

export default HouseholdForm;
