import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChefHat, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';

export const Navigation: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">RecipeShare</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to="/my-recipes"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
                >
                  My Recipes
                </Link>
                <Link
                  to="/create"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Create Recipe
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md flex items-center"
                >
                  <LogOut className="w-5 h-5 mr-1" />
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};