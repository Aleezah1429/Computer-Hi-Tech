import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Carousel } from "react-bootstrap";
import "../App.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel   activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item > 
        <img
          className="d-block w-100"
          src="https://www.memory4less.com/images/homepg_slides/KPM51VUG1T60-SAS.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='Carousel_Cap'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.memory4less.com/images/homepg_slides/P04174-003-SAS.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='Carousel_Cap'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.memory4less.com/images/homepg_slides/MZ-V6E1T0BW.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='Carousel_Cap'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;