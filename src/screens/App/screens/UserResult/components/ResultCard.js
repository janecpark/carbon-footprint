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
        <h5 className="card-title">Result date: {dateString}</h5>
        <p className="card-text">
          Food: {food} <br />
          Housing: {housing} <br />
          Transport: {transport} <br />
          <strong>Total: {total} tons CO2eq/year</strong>
        </p>
        <button className="btn btn-warning" onClick={() => removeResult(id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
