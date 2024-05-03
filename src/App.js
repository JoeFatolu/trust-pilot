import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Company, Home, CategoriesDetails, Categories } from 'routes'
import { Header, Footer } from 'components'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/company' element={<Company />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:details' element={<CategoriesDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
