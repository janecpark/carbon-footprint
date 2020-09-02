import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContext from '../FormContext';
import buildings from '../images/buildings.jpg';

const LocationForm = () => {
  const [location, setLocation] = useState('');
  const { formData, setFormData } = useContext(FormContext);
  let history = useHistory();

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation('');
    setFormData((prevState) => ({
      ...prevState,
      input_location: location,
    }));
    history.push('/household2');
  };

  const style = {
    backgroundImage: `url('${buildings}`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
  };

  return (
    <div className="HouseformForm ">
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="location">Where do you live?</label>
          <input
            name="location"
            className="form-control"
            id="location"
            type="text"
            placeholder="Please enter city or zipcode"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default LocationForm;
