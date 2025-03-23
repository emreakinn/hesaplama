import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import EhliyetHesapla from './EhliyetHesapla.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="EhliyetHesapla" element={<EhliyetHesapla />} />
    </Routes>
  </BrowserRouter>

)
