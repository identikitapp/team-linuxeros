import Carousel from 'react-bootstrap/Carousel'

import '../assets/css/Slider.css'
import img from '../assets/img/plantas/tulbaghia-violacea-21-10563c6ddc14a64c1c15577444702009-1024-1024.jpg'

const Slider = () => {
  return (
    <Carousel className='slider'>
      <Carousel.Item className='slider__item'>
        <img
          className="d-block w-100 slider__img"
          src={img}
          alt="First slide"
        />
        <span className="slider__filter"></span>
      </Carousel.Item>
      <Carousel.Item className='slider__item'>
        <img
          className="d-block w-100 slider__img"
          src={img}
          alt="Second slide"
        />
        <span className="slider__filter"></span>
      </Carousel.Item>
      <Carousel.Item className='slider__item'>
        <img
          className="d-block w-100 slider__img"
          src={img}
          alt="Third slide"
        />
        <span className="slider__filter"></span>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
