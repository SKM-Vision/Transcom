import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Products from '@/pages/Products'
import ProductCategory from '@/pages/ProductCategory'
import Manufacturing from '@/pages/Manufacturing'
import Contact from '@/pages/Contact'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:slug" element={<ProductCategory />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
