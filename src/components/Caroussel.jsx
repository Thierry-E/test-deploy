import { useState } from 'react'
import PropTypes from 'prop-types'

const Caroussel = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const totalSlides = slides.length

  const nextSlideIndex = (currentIndex) =>
    currentIndex === totalSlides - 1 ? 0 : currentIndex + 1
  const prevSlideIndex = (currentIndex) =>
    currentIndex === 0 ? totalSlides - 1 : currentIndex - 1

  const showNavigation = totalSlides > 1

  return (
    <div className='slideContainer'>
      <img src={slides[currentSlideIndex]} alt={`Slide ${currentSlideIndex}`} />
      {showNavigation && (
        <div>
          <i
            className='fa-solid fa-chevron-left rafter rafterLeft'
            onClick={() =>
              setCurrentSlideIndex(prevSlideIndex(currentSlideIndex))
            }
          ></i>
          <i
            className='fa-solid fa-chevron-right rafter rafterRight'
            onClick={() =>
              setCurrentSlideIndex(nextSlideIndex(currentSlideIndex))
            }
          ></i>
        </div>
      )}
      <div>
        {showNavigation && (
          <span className='counter'>{`${
            currentSlideIndex + 1
          }/${totalSlides}`}</span>
        )}
      </div>
    </div>
  )
}

Caroussel.propTypes = {
  slides: PropTypes.array.isRequired,
}

export default Caroussel
