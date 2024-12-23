import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <span className="text-yellow-400">Shop</span>Now
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="md:hidden bg-blue-800 text-white p-4">
        <ul className="space-y-4">
          <li><Link to="/" className="block">Home</Link></li>
          <li><Link to="/about" className="block">About</Link></li>
          <li><Link to="/contact" className="block">Contact</Link></li>
          <li><Link to="/cart" className="block">Cart</Link></li>
        </ul>
      </div>
    </nav>
  );
}
