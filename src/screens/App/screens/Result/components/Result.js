import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ResultContext from '../../../ResultContext';
import CarbonApi from '../../../CarbonApi';
import UserContext from '../../../UserContext';
import ActionContext from '../../../ActionContext';
import '../../../../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis';

const Result = () => {
  const history = useHistory();
  const { result } = useContext(ResultContext);
  const { curUser } = useContext(UserContext);
  const { action } = useContext(ActionContext);
  console.log(result);
  let values = Object.values(result);
  let types = Object.keys(result);
  values.pop();
  types.pop();
  let data = values.map((el, idx) => {
    return {
      x: types[idx],
      y: values[idx],
    };
  });

  async function handleSubmit() {
    const res = await CarbonApi.sendResult(result, curUser);
    await CarbonApi.actionResult(action, res.result.id);
    history.push('/user-result');
  }

  const result_display = (
    <div className="figures-display">
      <div className="row">
        <div className="col-sm">
          <div className="figures">
            <div className="figures-total">{result.total}</div>
            <div className="figures-text text-right">
              Your Carbon Footprint (CO2 emissions/year)
            </div>
          </div>
          <hr />
          <div className="figures">
            <div className="figures-num">{result.food}</div>
            <div className="figures-text">Food</div>
          </div>
          <div className="figures">
            <div className="figures-num">{result.housing}</div>
            <div className="figures-text">Housing</div>
          </div>
          <div className="figures">
            <div className="figures-num">{result.transport}</div>
            <div className="figures-text">Transport</div>
          </div>
        </div>
        <div className="col-sm">
          <XYPlot height={300} width={300} xType="ordinal" stackBy="y">
            <VerticalBarSeries data={data} />
            <XAxis />
            <YAxis />
          </XYPlot>
        </div>
      </div>
    </div>
  );

  const loggedInBtn = (
    <div className="d-flex justify-content-center figures-btn">
      <button onClick={handleSubmit} className="btn btn-primary">
        Save Results
      </button>
      <Link to="/take-action" className="btn btn-warning ml-2">
        Take Action
      </Link>
    </div>
  );
  const loggedOutBtn = (
    <div className="d-flex justify-content-center figures-btn">
      <Link to="/take-action" className="btn btn-warning ml-2">
        Take Action
      </Link>
    </div>
  );
  const error_display = (
    <div className="error_display text-center">
      <h4>{result.errors}</h4>
      <Link to="/household1" className="btn btn-warning err-btn">
        Start Over
      </Link>
    </div>
  );
  return (
    <div className="Results">
      <h2 className="text-center mt-4">Results page</h2>
      <div className="Results-display">
        <br />
        {result.errors || Object.entries(result).length === 0 ? (
          <>
            <br />
            <p className="text-center">No results</p>
            {error_display}
          </>
        ) : (
          <>
          {result_display}
          {curUser ? loggedInBtn : loggedOutBtn}
          </>
        )}
       
      </div>
    </div>
  );
};

export default Result;
