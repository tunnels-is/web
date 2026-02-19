import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    {
      label: 'Products',
      dropdown: [
        { path: '/features', label: 'Features' },
        { path: '/dns', label: 'DNS Security' },
        { path: '/security', label: 'Security' },
        { path: '/enterprise', label: 'Enterprise' },
      ]
    },
    {
      label: 'Use Cases',
      dropdown: [
        { path: '/homelab', label: 'Homelab' },
        { path: '/personal-vpn', label: 'Personal VPN' },
        { path: '/public', label: 'Public VPN' },
        { path: '/office', label: 'Office Networks' },
        { path: '/iot', label: 'IoT Networks' },
        { path: '/cloud', label: 'Cloud & Baremetal' },
        { path: '/lan-over-wan', label: 'LAN over WAN' },
      ]
    },
    { path: '/pricing', label: 'Pricing' },
    {
      label: 'Learn More',
      dropdown: [
        { path: '/free-and-opensource', label: 'Free & Open Source' },
        { path: 'https://docs.tunnels.is', label: 'Documentation', external: true },
        { path: 'https://github.com/tunnels-is', label: 'GitHub', external: true },
      ]
    },
  ];

  const isActivePath = (path) => location.pathname === path;
  const isActiveGroup = (items) => items?.some(item => location.pathname === item.path);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'glass-effect shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-dark-text-primary"><span className="text-dark-accent-primary">T</span>unnels</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link, idx) => (
              link.dropdown ? (
                <div key={idx} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActiveGroup(link.dropdown)
                        ? 'text-dark-accent-primary'
                        : 'text-dark-text-secondary hover:text-dark-text-primary'
                    }`}
                  >
                    {link.label}
                    <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {openDropdown === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-dark-surface rounded-lg shadow-xl shadow-black/30 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          item.external ? (
                            <a
                              key={item.path}
                              href={item.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2.5 text-sm text-dark-text-secondary hover:text-dark-text-primary hover:bg-dark-elevated transition-colors"
                            >
                              {item.label}
                              <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                              </svg>
                            </a>
                          ) : (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                isActivePath(item.path)
                                  ? 'text-dark-accent-primary bg-dark-accent-primary/10'
                                  : 'text-dark-text-secondary hover:text-dark-text-primary hover:bg-dark-elevated'
                              }`}
                            >
                              {item.label}
                            </Link>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActivePath(link.path)
                      ? 'text-dark-accent-primary'
                      : 'text-dark-text-secondary hover:text-dark-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/download"
              className="btn-primary text-sm py-2 px-5"
            >
              Download
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-dark-text-secondary hover:text-dark-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-dark-surface"
          >
            <div className="px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link, idx) => (
                link.dropdown ? (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-dark-text-secondary rounded-md"
                    >
                      {link.label}
                      <svg className={`w-4 h-4 transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {openDropdown === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.15 }}
                          className="pl-4 space-y-0.5"
                        >
                          {link.dropdown.map((item) => (
                            item.external ? (
                              <a
                                key={item.path}
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 text-sm text-dark-text-muted hover:text-dark-text-primary rounded-md"
                              >
                                {item.label}
                                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                                </svg>
                              </a>
                            ) : (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-3 py-2 text-sm rounded-md ${
                                  isActivePath(item.path)
                                    ? 'text-dark-accent-primary'
                                    : 'text-dark-text-muted hover:text-dark-text-primary'
                                }`}
                              >
                                {item.label}
                              </Link>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                      isActivePath(link.path)
                        ? 'text-dark-accent-primary'
                        : 'text-dark-text-secondary hover:text-dark-text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-3">
                <Link to="/download" className="btn-primary w-full text-center text-sm py-2.5">
                  Download
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TopBar;
