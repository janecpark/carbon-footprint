import React, { useState, useContext } from 'react';
import UserApi from '../../../UserApi';
import TokenContext from '../../../TokenContext';
import { useHistory } from 'react-router-dom';
import Alert from '../../../../../shared/components/Alert';

/** Log in form that logs in users and sets the token in localStorage */

const Login = () => {
  const history = useHistory();
  const { setToken } = useContext(TokenContext);
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    errors: [],
  });

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
    };
    try {
      const res = await UserApi.login(data);
      setToken(res.token);
      history.push('/');
    } catch (err) {
      setUserData((f) => ({ ...f, errors: [...err] }));
    }
  }

  const loginForm = (
    <form className="container login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={userData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button className="btn btn-primary btn-block">Log in</button>
    </form>
  );

  return (
    <div className="Login">
      <h2 className='Login-header'>Login</h2>
      {userData.errors.length ? (
        <Alert type="danger" messages={userData.errors} />
      ) : null}
      {loginForm}
    </div>
  );
};

export default Login;
