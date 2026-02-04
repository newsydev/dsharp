import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gunmetal-800 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-red rounded-lg flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <span className="text-lg font-heading font-bold">Elite Shooting Academy</span>
            </div>
            <p className="text-steel-300 text-sm">
              Training champions through discipline, precision, and Olympic-standard excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-steel-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/programs" className="block text-steel-300 hover:text-white transition-colors text-sm">
                Training Programs
              </Link>
              <Link to="/arsenal" className="block text-steel-300 hover:text-white transition-colors text-sm">
                Equipment
              </Link>
              <Link to="/coaches" className="block text-steel-300 hover:text-white transition-colors text-sm">
                Our Coaches
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link to="/safety" className="block text-steel-300 hover:text-white transition-colors text-sm">
                Safety Guidelines
              </Link>
              <Link to="/gallery" className="block text-steel-300 hover:text-white transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/contact" className="block text-steel-300 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-steel-300">
              <p>📍 Olympic Sports Complex</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@eliteshooting.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-accent-red transition-colors">FB</a>
                <a href="#" className="hover:text-accent-red transition-colors">IG</a>
                <a href="#" className="hover:text-accent-red transition-colors">TW</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-steel-300">
          <p>© {currentYear} Elite Shooting Academy. All rights reserved. | Licensed & Certified Training Facility</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
