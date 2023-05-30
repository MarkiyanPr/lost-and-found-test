import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display2 from './components/Display2/Display2';
import Display3 from './components/Display3/Display3';
import Display4 from './components/Display4/Display4';
import Login from './components/Login/Login';
import MainDisplay from './components/MainDisplay/MainDisplay';
import Find from './components/Find/Find';
import Lost from './components/Lost/Lost';
import Registration from './components/Registration/Registration';
import DisplayAbout from './components/About/About';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainDisplay />} />
          <Route path="/find" element={<Find />} />
          <Route path="/lost" element={<Lost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about-us" element={<DisplayAbout />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;