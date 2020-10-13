import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ResultContext from '../../../ResultContext';
import CarbonApi from '../../../CarbonApi';
import UserContext from '../../../UserContext';
import ActionContext from '../../../ActionContext';
import '../../../../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis';

/** Renders result and chart to show the carbon footprint calculations
 * Option to save results and view ways to reduce emissions
 */

const Result = () => {
  const history = useHistory();
  const { result } = useContext(ResultContext);
  const { curUser } = useContext(UserContext);
  const { action } = useContext(ActionContext);
  let values = Object.values(result);
  let total = values.pop();
  let average = [
    { x: 'Global', y: 4 },
    { x: 'US', y: 16 },
  ];
  average.unshift({ x: 'Your Footprint', y: total });
  async function handleSubmit() {
    const res = await CarbonApi.sendResult(result, curUser);
    await CarbonApi.actionResult(action, res.result.id);
    history.push('/user-result');
  }

  const result_display_logged_in = (
    <div className="figures-display">
      <div className="row">
        <div className="col-md">
          <div className="figures">
            <div className="figures-total">{result.total}</div>
            <div className="figures-text text-right">
              Your Carbon Footprint (CO2 emissions/year tons)
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
        <div className="col-md graph">
          <p className='text-center'>Compare Average</p>
          <XYPlot height={300} width={300} xType="ordinal" stackBy="y">
            <VerticalBarSeries data={average} color="#CADFB6" />
            <XAxis />
            <YAxis />
          </XYPlot>
        </div>
      </div>
      <div className="d-flex justify-content-center figures-btn">
        <button onClick={handleSubmit} className="btn btn-primary result-btn">
          Save Results
        </button>
        <Link to="/take-action" className="btn btn-warning result-btn ml-2">
          Take Action
        </Link>
      </div>
    </div>
  );
  const result_display_logged_out = (
    <div className="figures-display">
      <div className="row">
        <div className="col-md">
          <div className="figures">
            <div className="figures-total">{result.total}</div>
            <div className="figures-text text-right">
              Your Carbon Footprint (CO2 emissions/year tons)
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
        <div className="col-md graph">
          <p className='text-center'>Compare Average</p>
          <XYPlot height={300} width={300} xType="ordinal" stackBy="y">
            <VerticalBarSeries data={average} color="#CADFB6" />
            <XAxis />
            <YAxis />
          </XYPlot>
        </div>
      </div>
      <div className="d-flex justify-content-center figures-btn">
        <Link to="/take-action" className="btn btn-warning ml-2">
          Take Action
        </Link>
      </div>
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
      <h2 className="text-center mt-1">Results page</h2>
      <div className="Results-display">
        <br />
        {result.errors || Object.entries(result).length === 0 ? (
          <>
            <br />
            <p className="text-center">No results</p>
            {error_display}
          </>
        ) : (
          <>{curUser ? result_display_logged_in : result_display_logged_out}</>
        )}
      </div>
    </div>
  );
};

export default Result;
