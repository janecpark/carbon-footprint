import React from 'react';

const ResultCard = ({
  food,
  housing,
  transport,
  total,
  date,
  removeResult,
  id,
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Result date: {date}</h5>
        <p className="card-text">
          Food: {food} <br />
          Housing: {housing} <br />
          Transport: {transport} <br />
          Total: {total} tons CO2eq/year
        </p>
        <button className="btn btn-warning" onClick={() => removeResult(id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
