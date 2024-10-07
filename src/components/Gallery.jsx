import hebergements from '../datas/hebergements.json'
import Cart from '../components/Cart'

const Gallery = () => {
  return (
    <div className='gallery'>
      {hebergements.map((location) => (
        <Cart location={location} key={location.id} />
      ))}
    </div>
  )
}

export default Gallery
