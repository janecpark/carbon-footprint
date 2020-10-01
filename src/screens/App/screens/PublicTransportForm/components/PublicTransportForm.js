import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormContext from '../../../FormContext';

/** Shows a form to get information about public transportation  */

const PublicTransportForm = () => {
  const history = useHistory();
  const [transport, setTransport] = useState();
  const { setFormData } = useContext(FormContext);
  const handleChange = (e) => {
    setTransport(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      input_footprint_transportation_publictrans: transport || 452,
    }));
    history.push('/home1');
  };

  return (
    <div className="PublicTransportForm">
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <h4>Public Transit</h4>
          <div className="input-group">
            <input
              type="text"
              shadow-none
              className="form-control shadow-none"
              id="public-transit"
              placeholder="413 (optional)"
              onChange={handleChange}
              autoFocus
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
