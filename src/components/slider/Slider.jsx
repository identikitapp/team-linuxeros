import './Slider.css'
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
  return (
    <Carousel className="slider">
      <Carousel.Item className="slider__item">
        <img
          className="d-block w-100 slider__img"
          src={'/img/plantas/tulbaghia-violacea-21-10563c6ddc14a64c1c15577444702009-1024-1024.jpg'}
          alt="First slide"
        />
        <span className="slider__filter"></span>
      </Carousel.Item>
      <Carousel.Item className="slider__item">
        <img
          className="d-block w-100 slider__img"
          src={'/img/plantas/tulbaghia-violacea-21-10563c6ddc14a64c1c15577444702009-1024-1024.jpg'}
          alt="Second slide"
        />
        <span className="slider__filter"></span>
      </Carousel.Item>
      <Carousel.Item className="slider__item">
        <img
          className="d-block w-100 slider__img"
          src={'/img/plantas/tulbaghia-violacea-21-10563c6ddc14a64c1c15577444702009-1024-1024.jpg'}
          alt="Third slide"
        />
        <span className="slider__filter"></span>
      </Carousel.Item>
    </Carousel>
  )
}

export { Slider }
