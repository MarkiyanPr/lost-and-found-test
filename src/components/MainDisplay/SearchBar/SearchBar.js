import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import searchIcon from '../../../search.svg';
import './SearchBar.css';

const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState('');
  const [index, setIndex] = useState(0);
  const [state, setState] = useState('typing');
  const typingDelay = 100;
  const erasingDelay = 100;
  const waitingDelay = 3000;
  const words = ["Щось шукаєш? Знайдемо."];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (state === 'typing') {
        if (index < words[0].length) {
          setPlaceholder(prev => prev + words[0][index]);
          setIndex(prev => prev + 1);
        } else {
          setState('waiting');
        }
      } else if (state === 'waiting') {
        setTimeout(() => {
          setState('erasing');
        }, waitingDelay);
      } else if (state === 'erasing') {
        if (placeholder.length > 0) {
          setPlaceholder(prev => prev.slice(0, prev.length - 1));
        } else {
          setState('typing');
          setIndex(0);
        }
      }
    }, state === 'typing' ? typingDelay : erasingDelay);
    return () => clearInterval(intervalId);
  }, [index, placeholder, state]);
  
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder={placeholder}
        autoComplete="off"
      />
      <img src={searchIcon} alt="description of the image" />
    </div>
  );
};

export default SearchBar;
