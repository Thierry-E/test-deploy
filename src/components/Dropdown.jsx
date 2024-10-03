import { useState } from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='listContent'>
      <div className='list' onClick={toggleDropdown}>
        <h3>{title}</h3>
        <span className={`rafter ${isOpen ? 'rafterActive' : ''}`}>
          &#x2039;
        </span>
      </div>
      {isOpen && (
        <div className='equipmentList'>
          {typeof text === 'string' ? (
            <p className='listActive'>{text}</p>
          ) : Array.isArray(text) ? (
            <ul className='listActive'>
              {text.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      )}
    </div>
  )
}

// Définition des types de props
Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
}

export default Dropdown
