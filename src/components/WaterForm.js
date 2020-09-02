import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ocean from '../images/ocean.jpg';

const WaterForm = () => {
  const history = useHistory();
  const [waterForm, setWaterForm] = useState();
  const handleChange = (e) => {
    setWaterForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/food1');
  };

  const style = {
    backgroundImage: `url('${ocean}`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
  };

  return (
    <div className="WaterForm">
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="water">Water Usage</label>
          <input
            type="range"
            className="form-control-range"
            min="0"
            max="3x"
            id="water"
            onChange={handleChange}
          />
            <label className="float-left">0</label>
          <label className="float-right">3x</label>
        </div>
        <br/>
        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default WaterForm;
