import React from 'react';

/** About me page shows details of the website */

const About = () => {
  return (
    <div className="About container">
      <h1 className="text-center">About</h1>
      <div className="about-content">
        <div className="about-header">What it is</div>
        <div className="about-text">
          Allows individuals or households in the U.S. to calculate their carbon
          footprint and get personalized advice on managing their climate
          impact.
          <br />
          <br />
          Sign up to save results and compare past results.
        </div>
        <br />
        <hr></hr>
        <div className="about-header">How it is calculated</div>
        <div className="about-text">
          The data is calculated using
          <a href="https://api-central.berkeley.edu/api/11">
            {' '}
            CoolClimate API{' '}
          </a>
          by U.C. Berkeley.
        </div>
        <br />
        <hr></hr>
        <div className="about-header">What information is used</div>
        <div className="about-text">
          User's location, income, household, transportation, public
          transportation, water usage, and food consumption
        </div>
      </div>
    </div>
  );
};

export default About;
