import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Display3.css';

function Display3() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="container-3 container-def">
      <div className="filters">{/* фільтри */}</div>
      <Container>
        <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/150x150/ffffff/000?text=Photo1" alt="Image 1" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150x150/ffffff/000?text=Photo2" alt="Image 2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150x150/ffffff/000?text=Photo3" alt="Image 3" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150x150/ffffff/000?text=Photo4" alt="Image 4" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150x150/ffffff/000?text=Photo5" alt="Image 5" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150x150/ffffff/000?text=Photo6" alt="Image 6" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150x150/ffffff/000?text=Photo7" alt="Image 7" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150x150/ffffff/000?text=Photo8" alt="Image 8" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150x150/ffffff/000?text=Photo9" alt="Image 9" />
          </div>
          <div>
            <img src="https://via.placeholder.com/150x150/ffffff/000?text=Photo10" alt="Image 10" />
          </div>
        </Slider>
        <div className="page-pagination">
          <button className="pagination-button">1</button>
          <button className="pagination-button">2</button>
          <button className="pagination-button">3</button>
          <button className="pagination-button">4</button>
          <button className="pagination-button">5</button>
        </div>
      </Container>
    </div>
  );
}

export default Display3;
