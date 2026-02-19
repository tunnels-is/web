import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Hide on download page
  const isDownloadPage = location.pathname === '/download';

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDownloadPage || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="glass-effect border-t border-dark-border/50 px-4 py-3">
        <Link
          to="/download"
          className="block w-full bg-dark-accent-primary hover:bg-dark-accent-primary/90 text-white text-sm font-medium py-2.5 rounded text-center transition-colors"
        >
          Download Tunnels
        </Link>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
