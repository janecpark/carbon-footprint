import React from 'react';
import { useHistory } from 'react-router-dom';
import bus from '../images/bus.jpg';

const PublicTransportForm = () => {
  const history = useHistory();
  const handleChange = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="PublicTransportForm" >
      <form onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="public-transit">Public Transit</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="public-transit"
              placeholder="413"
            ></input>
            <label className="input-group-text">mi/yr</label>
            <div className="input-group-addon"></div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="air-transit">Air Travel</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="3,700"
              id="air-transit"
            ></input>
            <label className="input-group-text">mi/yr</label>
            <div className="input-group-addon"></div>
          </div>
        </div>
        {/* <button className="btn btn-success mr-2">Previous</button>
        <button className="btn btn-success">Next</button> */}
        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default PublicTransportForm;
