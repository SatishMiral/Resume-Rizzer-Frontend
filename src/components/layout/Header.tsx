import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">
          Resume Rizzer
        </Link>
        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <button
                onClick={() => {
                  logout();
                  nav('/');
                }}
                className="px-3 py-1 border rounded text-sm"
              >
                Logout
              </button>
              <Link to="/dashboard" className="text-sm">
                Dashboard
              </Link>
            </>
          ) : (
            <Link to="/login" className="px-3 py-1 border rounded text-sm">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
