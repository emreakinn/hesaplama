import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import EhliyetHesapla from './EhliyetHesapla.jsx'
import DersPuaniHesapla from './DersPuaniHesapla.jsx'
import IndirimHesapla from './IndirimHesapla.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="EhliyetHesapla" element={<EhliyetHesapla />} />
      <Route path="DersPuaniHesapla" element={<DersPuaniHesapla />} />
      <Route path="IndirimHesapla" element={<IndirimHesapla />} />
    </Routes>
  </BrowserRouter>

)
