// This Navbar component provides a simple navigation bar with links to the main sections of the application.

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-green-600">
        MacroMate
      </Link>

      <ul className="flex space-x-6 text-sm font-medium text-gray-700">
        <li>
          <Link to="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/log" className="hover:text-green-600 transition-colors">
            Log Meals
          </Link>
        </li>
        <li>
          <Link to="/goals" className="hover:text-green-600 transition-colors">
            Goals
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-green-600 transition-colors">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}