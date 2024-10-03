import PropTypes from 'prop-types'

const Banner = ({ showText, picture, altText }) => {
  return (
    <div className='banner'>
      <img src={picture} alt={altText} />
      {showText && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  )
}

// Définition des types de props avec PropTypes
Banner.propTypes = {
  showText: PropTypes.bool.isRequired,
  picture: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
}

export default Banner
