import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import DNS from './pages/DNS';
import Enterprise from './pages/Enterprise';
import Technical from './pages/Technical';
import Download from './pages/Download';
import Pricing from './pages/Pricing';
import FreeAndOpenSource from './pages/FreeAndOpenSource';
import CloudBaremetal from './pages/CloudBaremetal';
import Homelab from './pages/Homelab';
import PersonalVPN from './pages/PersonalVPN';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dns" element={<DNS />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/download" element={<Download />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/free-and-opensource" element={<FreeAndOpenSource />} />
          <Route path="/security" element={<Technical />} />
          <Route path="/public" element={<Features />} />
          <Route path="/homelab" element={<Homelab />} />
          <Route path="/cloud" element={<CloudBaremetal />} />
          <Route path="/iot" element={<Technical />} />
          <Route path="/office" element={<Technical />} />
          <Route path="/lan-over-wan" element={<Technical />} />
          <Route path="/personal-vpn" element={<PersonalVPN />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
