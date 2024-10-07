import Banner from './Components/Banner'
import Gallery from './Components/Gallery'
import falaises from '../assets/Falaises.jpg'

const Home = () => {
  return (
    <div>
      <Banner
        showText={true}
        picture={falaises}
        isOpaque={false}
        altText='Photo représentant des falaises en bord de mer'
      />
      <Gallery />
    </div>
  )
}

export default Home
