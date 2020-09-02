import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import electricity from '../images/electricity.jpg';

const HomeForm = () => {
  const history = useHistory();
  const [homeDetails, setHomeDetails] = useState();
  const handleChange = (e) => {
    setHomeDetails(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
              onChange={handleChange}
            />
            <div className="input-group-addon">
              <select name="gasoline" className="form-control" id="gasoline">
                <option>$</option>
                <option>kWh</option>
              </select>
            </div>
            <div className="input-group-addon">
              <select name="gasoline" className="form-control" id="gasoline">
                <option>/yr</option>
                <option>mo</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn btn-success">Next</button>
      </form>
    </div>
  );
};

export default HomeForm;
