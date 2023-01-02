import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Home } from './pages/home/Home'
import { Products } from './pages/products/Products'
import { Contact } from './pages/contact/Contact'
import { Footer } from './components/footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export { App }
