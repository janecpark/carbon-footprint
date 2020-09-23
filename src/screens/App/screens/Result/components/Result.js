import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ResultContext from '../../../ResultContext';
import CarbonApi from '../../../CarbonApi';
import UserContext from '../../../UserContext';
import ActionContext from '../../../ActionContext';
import BarChart from './Chart';
import '../../../../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis';

/**https://uber.github.io/react-vis/documentation/api-reference/grids */

const Result = () => {
  const history = useHistory();
  const { result } = useContext(ResultContext);
  const { curUser } = useContext(UserContext);
  const { action } = useContext(ActionContext);
  // const [data, setData] = useState([])
    let values = Object.values(result)
    let types = Object.keys(result)
    let data = values.map((el, idx)=>{
      return{
        x: types[idx],
        y: values[idx]
      }
    })

  async function handleSubmit() {
    const res = await CarbonApi.sendResult(result, curUser);
    await CarbonApi.actionResult(action, res.result.id);
    history.push('/user-result');
  }
  return (
    <div className="container">
      Results page
      <br />
      <p>Food: {result.food}</p>
      <p>Housing: {result.housing}</p>
      <p>Transport: {result.transport}</p>
      <p>Total: {result.total}</p>
      <XYPlot height={300} width={300} xType="ordinal" stackBy="y">
        <VerticalBarSeries data={data} />
        <XAxis />
        <YAxis />
      </XYPlot>
      {/* {data.length ? <BarChart width={500} height={300} data={data} /> : null} */}
      <h2>Take Action</h2>
      <p>Car pool: {action.carpool}</p>
      <p>Public Transport: {action.public_transport}</p>
      <p>Low Carbon Diet: {action.low_carbon_diet}</p>
      <p>Go Organic: {action.organic}</p>
      <p>Use energy star fridge: {action.fridge}</p>
      <p>Use green electricity: {action.green_electricity}</p>
      <button onClick={handleSubmit} className="btn btn-primary">
        Save Results
      </button>
    </div>
  );
};

export default Result;
