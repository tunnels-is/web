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
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-effect'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-dark-accent-primary to-dark-accent-tertiary flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 2L12 22M2 12L22 12" opacity="0.7"/>
                <circle cx="12" cy="12" r="3" fill="white" stroke="none"/>
              </svg>
            </div>
            <span className="text-base font-bold text-dark-text-primary tracking-tight">Tunnels</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
            {navLinks.map((link, idx) => (
              link.dropdown ? (
                <div key={idx} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-150 ${
                      isActiveGroup(link.dropdown)
                        ? 'text-dark-accent-primary'
                        : 'text-dark-text-secondary hover:text-dark-text-primary'
                    }`}
                  >
                    {link.label}
                    <svg className={`w-3 h-3 transition-transform duration-200 ${openDropdown === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {openDropdown === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-1.5 w-48 bg-dark-surface/95 backdrop-blur-xl rounded-lg border border-dark-border shadow-2xl shadow-black/40 overflow-hidden"
                      >
                        <div className="py-1">
                          {link.dropdown.map((item) => (
                            item.external ? (
                              <a
                                key={item.path}
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-3 py-2 text-[13px] text-dark-text-secondary hover:text-dark-text-primary hover:bg-dark-elevated/60 transition-all duration-150"
                              >
                                {item.label}
                                <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                                </svg>
                              </a>
                            ) : (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-3 py-2 text-[13px] transition-all duration-150 ${
                                  isActivePath(item.path)
                                    ? 'text-dark-accent-primary bg-dark-accent-primary/8'
                                    : 'text-dark-text-secondary hover:text-dark-text-primary hover:bg-dark-elevated/60'
                                }`}
                              >
                                {item.label}
                              </Link>
                            )
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-150 ${
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
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="https://github.com/tunnels-is"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-dark-text-muted hover:text-dark-text-secondary transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <Link
              to="/download"
              className="btn-primary text-[13px] py-1.5 px-4"
            >
              Download
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 rounded-md text-dark-text-secondary hover:text-dark-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-dark-surface/95 backdrop-blur-xl border-t border-dark-border"
          >
            <div className="px-4 py-2 space-y-0.5 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link, idx) => (
                link.dropdown ? (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                      className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-dark-text-secondary rounded-md"
                    >
                      {link.label}
                      <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
                          className="pl-3 space-y-0.5"
                        >
                          {link.dropdown.map((item) => (
                            item.external ? (
                              <a
                                key={item.path}
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-dark-text-muted hover:text-dark-text-primary rounded-md"
                              >
                                {item.label}
                                <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                                </svg>
                              </a>
                            ) : (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-3 py-1.5 text-[13px] rounded-md ${
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
                    className={`block px-3 py-2 text-[13px] font-medium rounded-md ${
                      isActivePath(link.path)
                        ? 'text-dark-accent-primary'
                        : 'text-dark-text-secondary hover:text-dark-text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-2 pb-1">
                <Link to="/download" className="btn-primary w-full text-center text-[13px] py-2">
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
