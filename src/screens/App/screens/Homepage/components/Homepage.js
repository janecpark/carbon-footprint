import React from 'react';
import { Link } from 'react-router-dom';
// import background from '../images/background.jpg';
// import './Homepage.css';

const Homepage = () => {
  // const style = {
  //   backgroundImage: `url(${background})`,
  //   backgroundSize: 'cover',
  //   height: '100vh',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  //   width: '100vw',
  // };
  return (
    <div className="Homepage">
      <div className="container header">
        <h2>Welcome to Carbon Footprint Calculator</h2>
        <Link to="/household1" className="btn btn-warning">
          Take the first step
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
