import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import DNS from './pages/DNS';
import Enterprise from './pages/Enterprise';
import Download from './pages/Download';
import Pricing from './pages/Pricing';
import FreeAndOpenSource from './pages/FreeAndOpenSource';
import CloudBaremetal from './pages/CloudBaremetal';
import Homelab from './pages/Homelab';
import PersonalVPN from './pages/PersonalVPN';
import OfficeNetworks from './pages/OfficeNetworks';
import IoTNetworks from './pages/IoTNetworks';
import LanOverWan from './pages/LanOverWan';
import PublicVPN from './pages/PublicVPN';
import Security from './pages/Security';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dns" element={<DNS />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/download" element={<Download />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/free-and-opensource" element={<FreeAndOpenSource />} />
          <Route path="/security" element={<Security />} />
          <Route path="/public" element={<PublicVPN />} />
          <Route path="/homelab" element={<Homelab />} />
          <Route path="/cloud" element={<CloudBaremetal />} />
          <Route path="/iot" element={<IoTNetworks />} />
          <Route path="/office" element={<OfficeNetworks />} />
          <Route path="/lan-over-wan" element={<LanOverWan />} />
          <Route path="/personal-vpn" element={<PersonalVPN />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
