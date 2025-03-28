import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import EhliyetHesapla from './EhliyetHesapla.jsx'
import DersPuaniHesapla from './DersPuaniHesapla.jsx'
import IndirimHesapla from './IndirimHesapla.jsx'
import ZamHesapla from './ZamHesapla.jsx'
import MilKmHesapla from './MilKmHesapla.jsx'
import KelimeHesapla from './KelimeHesapla.jsx'
import KarakterHesapla from './KarakterHesapla.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="EhliyetHesapla" element={<EhliyetHesapla />} />
      <Route path="DersPuaniHesapla" element={<DersPuaniHesapla />} />
      <Route path="IndirimHesapla" element={<IndirimHesapla />} />
      <Route path="ZamHesapla" element={<ZamHesapla />} />
      <Route path="MilKmHesapla" element={<MilKmHesapla />} />
      <Route path="KelimeHesapla" element={<KelimeHesapla />} />
      <Route path="KarakterHesapla" element={<KarakterHesapla />} />
    </Routes>
  </BrowserRouter>

)
