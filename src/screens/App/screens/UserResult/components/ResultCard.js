import React from 'react';

/** Result card component */

const ResultCard = ({
  food,
  housing,
  transport,
  total,
  date,
  removeResult,
  id,
}) => {
  let dateString = date.substring(0, 10);
  return (
    <div className="card container">
      <div className="card-body">
        <h5 className="card-title">{dateString}</h5>
        <p className="card-text">
          Food: {food} <br />
          Housing: {housing} <br />
          Transport: {transport} <br />
          <p className='card-total'><strong>Total: {total} tons CO2eq/year</strong></p>
        </p>
        <button className="btn btn-warning result-btn" onClick={() => removeResult(id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
