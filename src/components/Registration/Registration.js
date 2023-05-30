import React, { useState } from 'react';
import './Registration.css';
import "typeface-montserrat";
import Header from '../Header/Header';
import MainIcons from '../../main-icons.svg';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Тут можна додати логіку для обробки реєстрації
    console.log('Реєстрація:', email, password);
  };

  const [advertisement, setAdvertisement] = useState(false);

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
                id="email-reg"
                placeholder="Електронна пошта або номер телефону:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className='password-input'
                id="password-reg"
                placeholder="Пароль:"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className='privacy-policy'>Реєструючись на <span className='company-name'>Lost & Found</span> , ви приймаєте наші <span className='conditionals'>Умови Використання</span></p>
              <button onClick={handleRegister} className='aut-button reg-btn'>Підтвердити</button>

              <div className='advertisement-input'>
              <label className='advertisement-input-container'>
              <input
                type="checkbox"
                id="advertisement"
                checked={advertisement}
                onChange={(e) => setAdvertisement(e.target.checked)}
              />
              <span className="checkmark"></span>
              </label>
              <label htmlFor="advertisement">Підписатися на розсилку новин(сповіщення про повідомлення)</label>
              
              </div>
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

export default Registration;
