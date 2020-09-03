import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import bus from '../images/bus.jpg';
import FormContext from '../FormContext';

const PublicTransportForm = () => {
  const history = useHistory();
  const [transport, setTransport] = useState();
  const { formData, setFormData } = useContext(FormContext);
  const handleChange = (e) => {
    setTransport(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_footprint_transportation_publictrans: transport
    }));
    history.push('/home1');
  };

  const style = {
    backgroundImage: `url('${bus}`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
  };

  return (
    <div className="PublicTransportForm">
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="public-transit">Public Transit</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="public-transit"
              placeholder="413"
              onChange={handleChange}
            ></input>
            <label className="input-group-text">mi/yr</label>
            <div className="input-group-addon"></div>
          </div>
        </div>
        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default PublicTransportForm;
