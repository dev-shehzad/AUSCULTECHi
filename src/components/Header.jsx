import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Technology', href: '/technology' },
    { name: 'Team', href: '/team' },
    { name: 'News', href: '/news' },
    { name: 'Publications', href: '/publications' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`border-b z-[1000] sticky top-0  bg-white transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-12' : 'h-16'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="logo"
                width={isScrolled ? 180 : 301}
                height={isScrolled ? 30 : 60}
                className="transition-all duration-300"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-sfui text-[18px]">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={`${
                  isActive(link.href) ? 'text-[#24A6E8]' : 'text-gray-500'
                } hover:text-[#24A6E8] transition-all ease-in-out duration-300`}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              className="bg-[#D64D47] hover:text-[#D64D47] hover:border-[2px] hover:border-[#D64D47] text-white px-5 hover:px-[18px] hover:py-1 py-1.5 font-sfui font-[700] tracking-[1.5px] rounded-[25px] hover:bg-white transition-colors text-[15px]"
            >
              LOGIN
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4 font-sfui font-[17px]">
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={`${
                    isActive(link.href) ? 'text-blue-500' : 'text-gray-500'
                  } hover:text-blue-700`}
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/login"
                className="bg-red-500 text-white px-4 py-2 rounded-[25px] hover:bg-red-600 transition-colors inline-block text-center"
              >
                LOGIN
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
