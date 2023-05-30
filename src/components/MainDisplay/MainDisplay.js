import './MainDisplay.css';
import SearchBar from './SearchBar/SearchBar';
import MainIcons from '../../main-icons.svg';
import "typeface-montserrat";
import Header from '../Header/Header';
import Display2 from '../Display2/Display2';
import Display3 from '../Display3/Display3';
import Display4 from '../Display4/Display4';
import Find from '../Find/Find';
import Login from '../Login/Login';
import DisplayAbout from '../About/About';

function MainDisplay() {
  return (
    <div>
    <div className="container-1 container-def">
      <Header></Header>
      <div className='main-display'>
        <div className='left-column'>
          <div className="column-content">
            <SearchBar></SearchBar>
            <p>Скористайтеся послугою Загубив - Знайшов — це чудовий спосіб не хвилюватись через втрату чогось цінного чи сентиментального. Це також може бути ефективним способом швидкого відновлення втрачених речей без клопоту самостійного пошуку.</p>
          </div>
        </div>
        <div className='right-column'>
          <div className=''>
            <img src={MainIcons} alt="description of the image" />
          </div>
          
        </div>
      </div>
    </div>
    <Display2 />
          <Display3 />
          <Display4 />
    </div>
  );
}


export default MainDisplay;
