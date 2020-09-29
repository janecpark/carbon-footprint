import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActionContext from '../../../ActionContext';

const TakeAction = () => {
  const { action } = useContext(ActionContext);
  const action_display = (
    <div className="take-action-display">
      <div className="row">
        <div className="col-sm">
          <div className="take-action-num">{action.carpool}</div>
          <div className="take-action-num">{action.public_transport}</div>
          <div className="take-action-num">{action.organic}</div>
          <div className="take-action-num">{action.fridge}</div>
          <div className="take-action-num">{action.green_electricity}</div>
          <p>In tons</p>
        </div>
        <div className="col-sm">
          <div className="take-action-text">Car pool</div>
          <div className="take-action-text">Public Transport</div>
          <div className="take-action-text">Go organic</div>
          <div className="take-action-text">Use energy star fridge</div>
          <div className="take-action-text">Use green electricity</div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="TakeAction container">
      <h2 className="text-center">
        You can reduce your impact by taking these actions:
      </h2>
      <br />
      <br />
      {action_display}
      <div className="d-flex justify-content-center take-action-btn">
        <Link to="/result" className="btn btn-warning">
          Back
        </Link>
      </div>
    </div>
  );
};

export default TakeAction;
