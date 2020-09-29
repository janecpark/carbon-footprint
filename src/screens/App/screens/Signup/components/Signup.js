import React, { useState, useContext } from 'react';
import UserApi from '../../../UserApi';
import { useHistory } from 'react-router-dom';
import TokenContext from '../../../TokenContext';
import Alert from '../../../../../shared/components/Alert';

const Signup = () => {
  const { setToken } = useContext(TokenContext);
  const history = useHistory();
  const INITIAL_STATE = {
    username: '',
    password: '',
    email: '',
    errors: [],
  };
  const [userData, setUserData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((el) => ({
      ...el,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      username: userData.username,
      password: userData.password,
      email: userData.email,
    };
    let res;
    try {
      res = await UserApi.signUp(data);
      setToken(res.token);
    } catch (err) {
      console.log(err);
      return setUserData((f) => ({ ...f, errors: err }));
    }
    history.push('/');
  }
  return (
    <div className="Signup">
      <form className="signUpForm container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={handleChange}
            value={userData.username}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
            value={userData.password}
            minLength="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
            value={userData.email}
            required
          />
        </div>
        <button className="btn btn-primary btn-block">Sign Up</button>
        {userData.errors.length ? (
          <Alert type="danger" messages={userData.errors} />
        ) : null}
      </form>
    </div>
  );
};

export default Signup;
