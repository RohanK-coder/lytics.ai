import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import Signin from './pages/Signin.tsx'
import ProductList from './pages/ProductList.tsx'
import Navbar from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/product-list" element={<ProductList/>}/>
        
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
