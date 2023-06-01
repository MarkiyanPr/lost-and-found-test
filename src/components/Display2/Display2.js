import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Display2.css';
import wallet from '../../img/walet.png';
import phone from '../../img/mobile.png';
import bag from '../../img/bag.png';
import doc from '../../img/doc.png';
import pet from '../../img/pet.png';
import key from '../../img/key.png';
import accessories from '../../img/accessories.png';
import another from '../../img/another.png';
import moment from 'moment';

function Display2() {
  const [date, setDate] = useState(new Date());

  // Set the maximum date that can be selected to 20 days ago
  const maxSelectableDate = moment().subtract(20, 'days').startOf('day').toDate();

  const handleDateChange = (value) => {
    // Only update the date if it's not greater than the maximum selectable date
    if (value <= maxSelectableDate) {
      setDate(value);
    }
  };
  

  return (
    <div className="container-2 container-def">
      <div className="display2">
        <div className='flex-container'>
        <div className="left-column">
          <div className="column-content">
            <h3>Категорії:</h3>
            <div className="category-tabs">
              <div className="left">
                <button>
                  <img src={wallet} alt="wallet" />
                  Гаманці
                </button>
                <button>
                  <img src={phone} alt="phone" />
                  Техніка
                </button>
                <button>
                  <img src={bag} alt="bag" />
                  Сумки
                </button>
                <button>
                  <img src={doc} alt="doc" />
                  Документи
                </button>
              </div>
              <div className="right">
                <button>
                  <img src={pet} alt="pet" />
                  Тваринки
                </button>
                <button>
                  <img src={key} alt="key" />
                  Ключі
                </button>
                <button>
                  <img src={accessories} alt="accessories" />
                  Аксесуари
                </button>
                <button>
                  <img src={another} alt="another" />
                  Інше...
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <h3>Оберіть вашу дату втрати:</h3>
          <Calendar
            onChange={handleDateChange}
            value={date}
            maxDate={new Date()}
            minDate={maxSelectableDate}
            minDetail={'month'}
            className="custom-calendar"
          />
        </div>
        </div>
        <div className="button-row">
            <button className="submit-button">Знайти</button>
          </div>
      </div>
    </div>
  );
}

export default Display2;
