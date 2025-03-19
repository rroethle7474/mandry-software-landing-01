import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="block cursor-pointer hover:opacity-90 transition-opacity">
              <Logo className="w-12 h-12" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* About Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg overflow-hidden z-20 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 origin-top transition-all duration-200 ease-in-out">
                <a 
                  href="https://example.com/team" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Our Team
                </a>
                <a 
                  href="https://example.com/story" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Our Story
                </a>
                <a 
                  href="https://example.com/values" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Our Values
                </a>
              </div>
            </div>

            {/* Projects Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                Projects
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg overflow-hidden z-20 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 origin-top transition-all duration-200 ease-in-out">
                <a 
                  href="https://example.com/webapp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Web Applications
                </a>
                <a 
                  href="https://example.com/mobile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Mobile Apps
                </a>
                <a 
                  href="https://example.com/enterprise" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Enterprise Solutions
                </a>
              </div>
            </div>
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
              {/* About Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-300">About</div>
                <div className="pl-6 space-y-1">
                  <a
                    href="https://example.com/team"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Our Team
                  </a>
                  <a
                    href="https://example.com/story"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Our Story
                  </a>
                  <a
                    href="https://example.com/values"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Our Values
                  </a>
                </div>
              </div>
              
              {/* Projects Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-300">Projects</div>
                <div className="pl-6 space-y-1">
                  <a
                    href="https://example.com/webapp"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Web Applications
                  </a>
                  <a
                    href="https://example.com/mobile"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Mobile Apps
                  </a>
                  <a
                    href="https://example.com/enterprise"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Enterprise Solutions
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;