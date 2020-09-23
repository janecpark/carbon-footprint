import React, { useState, useContext } from 'react';
import UserApi from '../../../UserApi';
import TokenContext from '../../../TokenContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory()
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
      setUserData({ username: '', password: '' });
    } catch (err) {
      return setUserData((f) => ({ ...f, err }));
    }
    history.push('/')
  }

  const loginForm = (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={userData.username}
          onChange={handleChange}
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
        />
      </div>
      <button className="btn btn-primary">Log in</button>
    </form>
  );

  return (
    <div className="Login">
      {/* {userData.errors.length ? (
        <div className={`alert alert-danger`} role="alert">
          {userData.errors.map((error) => (
            <p className="mb-0 small" key={error}>
              {error}
            </p>
          ))}
        </div>
      ) : null} */}
      {loginForm}
    </div>
  );
};

export default Login;
