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
    {
      label: 'Product',
      dropdown: [
        { heading: 'Platform' },
        { path: '/features', label: 'Features' },
        { path: '/security', label: 'Security' },
        { path: '/technical', label: 'Technical' },
        { path: '/dns', label: 'DNS' },
        { heading: 'About' },
        { path: '/free-and-opensource', label: 'Free & Open Source' },
        { path: 'https://github.com/tunnels-is', label: 'GitHub', external: true },
      ]
    },
    {
      label: 'Solutions',
      dropdown: [
        { heading: 'Personal' },
        { path: '/personal-vpn', label: 'Personal VPN' },
        { path: '/homelab', label: 'Homelab' },
        { path: '/public', label: 'Public VPN' },
        { heading: 'Business' },
        { path: '/office', label: 'Office Networks' },
        { path: '/enterprise', label: 'Enterprise' },
        { path: '/iot', label: 'IoT Networks' },
        { path: '/cloud', label: 'Cloud & Baremetal' },
        { path: '/lan-over-wan', label: 'LAN over WAN' },
      ]
    },
    { path: '/pricing', label: 'Pricing' },
    { path: 'https://docs.tunnels.is', label: 'Docs', external: true },
  ];

  const isActivePath = (path) => location.pathname === path;
  const isActiveGroup = (items) => items?.some(item => item.path && location.pathname === item.path);

  const renderDropdownItem = (item) => {
    if (item.heading) {
      return (
        <div key={item.heading} className="px-3 pt-2 pb-1 first:pt-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-text-muted">
            {item.heading}
          </span>
        </div>
      );
    }
    if (item.external) {
      return (
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
      );
    }
    return (
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
    );
  };

  const renderMobileDropdownItem = (item) => {
    if (item.heading) {
      return (
        <div key={item.heading} className="px-3 pt-2 pb-0.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-text-muted">
            {item.heading}
          </span>
        </div>
      );
    }
    if (item.external) {
      return (
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
      );
    }
    return (
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
    );
  };

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
          <Link to="/" className="flex items-center">
            <span className="text-base font-bold tracking-tight"><span className="text-dark-accent-primary">T</span><span className="text-dark-text-primary">unnels</span></span>
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
                          {link.dropdown.map(renderDropdownItem)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-150 text-dark-text-secondary hover:text-dark-text-primary inline-flex items-center gap-1"
                >
                  {link.label}
                  <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
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
            <Link
              to="/download"
              className="bg-dark-accent-primary hover:bg-dark-accent-primary/90 text-white text-xs font-medium py-1.5 px-3 rounded transition-colors"
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
                          {link.dropdown.map(renderMobileDropdownItem)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-dark-text-secondary hover:text-dark-text-primary rounded-md"
                  >
                    {link.label}
                    <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
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
