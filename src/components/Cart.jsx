import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Cart = ({ location }) => {
  return (
    <div key={location.id} className='cart-Item'>
      <NavLink to={`/Locations/${location.id}`}>
        <img src={location.cover} alt={location.title} />
        <h3>{location.title}</h3>
      </NavLink>
    </div>
  )
}

Cart.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
}

export default Cart
