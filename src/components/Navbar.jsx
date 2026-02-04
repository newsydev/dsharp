import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [zoneMenuOpen, setZoneMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const zones = [
    { name: 'Range', path: '/', code: 'R-01' },
    { name: 'Training', path: '/programs', code: 'T-02' },
    { name: 'Arsenal', path: '/arsenal', code: 'A-03' },
    { name: 'Coaches', path: '/coaches', code: 'C-04' },
    { name: 'Safety', path: '/safety', code: 'S-05' },
    { name: 'Gallery', path: '/gallery', code: 'G-06' },
    { name: 'Enrollment', path: '/contact', code: 'E-07' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-gunmetal-900/95 backdrop-blur-sm border-b border-steel-700' : 'bg-transparent'
      }`}
    >
      <div className="max-w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Academy ID Badge */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-accent-red border-2 border-accent-redLight flex items-center justify-center">
              <span className="text-lg font-bold font-heading">D</span>
            </div>
            <div className="hidden lg:block">
              {/* <div className="text-xs text-steel-400 uppercase tracking-wider">Facility</div> */}
              <div className="text-sm font-heading font-bold text-neutral">Dsharp Shooters Academy</div>
            </div>
          </Link>

          {/* Zone Navigation - Industrial Style */}
          <div className="hidden lg:flex items-center space-x-8">
            {zones.map((zone) => (
              <Link
                key={zone.path}
                to={zone.path}
                className={`group flex flex-col transition-all duration-500 ${
                  location.pathname === zone.path
                    ? 'text-neutral'
                    : 'text-steel-400 hover:text-neutral'
                }`}
              >
                <span className="text-xs tracking-widest uppercase font-mono">{zone.code}</span>
                <span className="text-sm font-heading font-semibold">{zone.name}</span>
                <div className={`h-0.5 mt-1 transition-all duration-500 ${
                  location.pathname === zone.path 
                    ? 'w-full bg-accent-red' 
                    : 'w-0 group-hover:w-full bg-steel-500'
                }`} />
              </Link>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-red animate-pulse" />
              <span className="text-xs text-steel-400 uppercase tracking-wider">Facility Active</span>
            </div>
            <Link
              to="/contact"
              className="bg-accent-red hover:bg-accent-redLight px-6 py-2 font-mono text-sm tracking-wider transition-all duration-500 border border-accent-redLight uppercase"
            >
              Enroll
            </Link>
          </div>

          {/* Mobile Zone Menu */}
          <button
            onClick={() => setZoneMenuOpen(!zoneMenuOpen)}
            className="lg:hidden p-2 border border-steel-700 hover:border-steel-500 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {zoneMenuOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Zone Menu Panel */}
      {zoneMenuOpen && (
        <div className="lg:hidden bg-gunmetal-900 border-t border-steel-700">
          <div className="px-6 py-6 space-y-1">
            {zones.map((zone) => (
              <Link
                key={zone.path}
                to={zone.path}
                onClick={() => setZoneMenuOpen(false)}
                className={`flex items-center justify-between py-3 border-b border-steel-700/50 transition-all duration-500 ${
                  location.pathname === zone.path
                    ? 'text-neutral border-accent-red'
                    : 'text-steel-400 hover:text-neutral'
                }`}
              >
                <span className="font-heading font-semibold">{zone.name}</span>
                <span className="text-xs font-mono tracking-widest">{zone.code}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
