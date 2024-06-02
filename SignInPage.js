import React, { useState } from 'react';
import './SignInPage.css';
import Navbar from '../components/Navbar';
function SignInPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Here you can add logic to submit the form, like calling an API
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
    <div className="sign-in-container">
      <form onSubmit={handleSubmit} className="sign-in-form">
        <h2>Sign In</h2>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
    </div>
  );
};

export default SignInPage;
