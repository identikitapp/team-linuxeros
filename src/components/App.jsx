import '../assets/css/App.css'

import Header from './Header'
import Home from '../pages/Home'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
