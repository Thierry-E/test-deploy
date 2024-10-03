import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from '../Pages/Home'
import Footer from './Footer'
import Error from '../pages/Error'
import About from '../pages/About'
import Locations from '../pages/Locations'

const App = () => {
  const basename = import.meta.env.MODE === 'production' ? '/test-deploy' : ''
  return (
    <div>
      <HashRouter basename={basename}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Locations/:id' element={<Locations />} />
          {/* Route pour afficher les détails d'un appartement en fonction de son identifiant */}
          <Route path='*' element={<Error />} />
          {/*Route générique pour les URL non valides*/}
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
