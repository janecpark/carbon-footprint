import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../../shared/stylesheet/app.css';
import earthbg from '../images/earthbg.png';

/** Home page shows button to start the questionnaire */

const Homepage = () => {
  const style = {
    backgroundImage: `url(${earthbg})`,
    backgroundSize: 'auto',
    height: '90vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
  };

  return (
    <div className="Homepage" style={style}>
      <div className="container header text-center ">
        <h2 className="Homepage-header">
          Welcome to Carbon Footprint Calculator
        </h2>
        <Link
          to="/household1"
          className="btn btn-warning text-center"
          id="stepBtn"
        >
          Take the first step
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
