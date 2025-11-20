import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-primary-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Portfolio
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Projects
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Contact
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/admin" className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:from-primary-600 hover:to-secondary-600 transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-primary-600 hover:text-primary-700 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:from-primary-600 hover:to-secondary-600 transition-all"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="w-6 h-6 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
