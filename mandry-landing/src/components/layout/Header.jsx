import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Logo className="w-12 h-12" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;