import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import electricity from '../images/electricity.jpg';
import FormContext from '../FormContext';

const HomeForm = () => {
  const history = useHistory();
  const { formData, setFormData } = useContext(FormContext);
  const [homeDetails, setHomeDetails] = useState();
  const handleChange = (e) => {
    setHomeDetails(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(prevState=>({
      ...prevState,
      input_footprint_housing_electricity_dollars: homeDetails
    }))
    history.push('/home2');
  };

  const style = {
    backgroundImage: `url('${electricity}`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
  };
  return (
    <div className="HomeForm">
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="Electricity">Electricity</label>
          <div className="input-group">
            <input
              name="electricity"
              className="form-control"
              id="electricity"
              type="text"
              placeholder='1500'
              onChange={handleChange}
            />
            <div className="input-group-addon">
                <label className='input-group-text'>$</label>
            </div>
            <div className="input-group-addon">
                <label className='input-group-text'>/yr</label>
            </div>
          </div>
        </div>
        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default HomeForm;
