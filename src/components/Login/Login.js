import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import "typeface-montserrat";
import Header from '../Header/Header';
import MainIcons from '../../main-icons.svg';
import GoogleIcon from '../../img/google-icon.svg';
import AppleIcon from '../../img/apple-icon.svg';
import FacebookIcon from '../../img/facebook-icon.svg';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Тут можна додати логіку для обробки авторизації
    console.log('Вхід:', username, password);
  };

  return (
  <div className="container-login container-def">
    <Header></Header>
  <div className='main-display'>
        <div className='left-column'>
        <div className="column-content">
          <div className='login-system'>
      <input
        type="text"
        className='login-input'
        id="username"
        placeholder="Логін:"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        className='password-input'
        id="password"
        placeholder="Пароль:"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin} className='aut-button'>Авторизуватися</button>
      <Link to="/registration">
      <button className='reg-button'>Реєстрація</button>
      </Link>
          </div>
          <div className="aut-divider">
  <div className="line"></div>
  <span className="text">або</span>
  <div className="line"></div>
</div>
        <div className="login-social-block">
      <button className="login-button google">
        <img className="icon" src={GoogleIcon} />
        Continue with Google
      </button>
      <button className="login-button apple">
      <img className="icon" src={AppleIcon} />
        Sign in with Apple
      </button>
      <button className="login-button facebook">
      <img className="icon" src={FacebookIcon} />
        Continue with Facebook
      </button>
    </div>
    </div>
          </div>
        <div className='right-column'>
<img src={MainIcons} alt="description of the image" />

        </div>
    </div>
    </div>
  );
}

export default Login;
