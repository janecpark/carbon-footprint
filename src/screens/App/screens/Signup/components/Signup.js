import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import UserApi from '../UserApi'

const Signup = () => {
  const INITIAL_STATE = {
    username: '',
    password: '',
    email: '',
    errors:[]
  }
  const [userData, setUserData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((el) => ({
      ...el,
      [name]: value,
    }));
  };
  
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   let data = {
  //     username: userData.username,
  //     password: userData.password,
  //     email: userData.email
  //   };
  //   let token;
  //   try {
  //     token = await UserApi.signUp(data);
  //   } catch (err) {
  //     return setUserData((f) => ({ ...f, err }));
  //   }
  //   setUserData(INITIAL_STATE)
  // }
  return (
    <div className="Signup">
      <form  className="signUpForm container ">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={handleChange}
            value={userData.username}
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>

        <button className="btn btn-primary btn-block">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
