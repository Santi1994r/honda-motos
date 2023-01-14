import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
  return (
    <div>
         <Carousel className='containerCarrousel' fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/carrousel/carrousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>XR 190L</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/carrousel/carrousel2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Wave 110 S</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/images/carrousel/carrousel3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>CB125F</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carrousel