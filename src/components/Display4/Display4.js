import React from 'react';
import Iframe from 'react-iframe';

import './Display4.css';


function Display4() {
  return (
    <div className="container-4 container-def">
      <div className='iframe-container'>
      <Iframe
              url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5101.974069546073!2d24.018506470188086!3d49.83848247535614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1683994909828!5m2!1suk!2sua"
              width="80%"
              height="80%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
      </div>
    </div>
  );
}

export default Display4;
