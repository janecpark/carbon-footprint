import React, { useContext, useEffect, useState } from 'react';
import CarbonApi from '../../../CarbonApi';
import UserContext from '../../../UserContext';
import ResultCard from './ResultCard';

/** Fetches user result from database and renders a list */

const UserResult = () => {
  const { curUser } = useContext(UserContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function userResult() {
      if (curUser) {
        const result = await CarbonApi.getResult(curUser);
        setUserData(result.data.result);
      }
    }
    userResult();
  }, [curUser]);

  async function removeResult(idx) {
    await CarbonApi.removeResultApi(idx);
    setUserData(userData.filter((r) => r.id !== idx));
  }

  const displayResult = userData.map((r) => (
    <ResultCard
      key={r.id}
      id={r.id}
      food={r.food}
      housing={r.housing}
      total={r.total}
      date={r.posting_date}
      transport={r.transport}
      removeResult={removeResult}
    />
  ));

  return (
    <div className="User-result">
      <h2 className=" User-result-text text-center container">Saved Results</h2>
      {userData.length ? 
      <div className="card-container">{displayResult}</div> : <p className='text-center'> No saved results! </p>
      }
    </div>
  );
};

export default UserResult;
