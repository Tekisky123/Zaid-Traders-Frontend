import { LogOut, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  userName: string;
  role: string;
  onLogout: () => void;
}

export default function Navbar({ userName, role, onLogout }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
              <Link to="/"> Zaid Traders</Link>
            </span>
          </div>

          {/* Hamburger Menu */}
          <div className="sm:hidden flex items-center gap-5">
            {/* Theme Toggle (Always Visible) */}
            <div className="sm:hidden flex items-center">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-6">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Welcome, <span className="font-semibold">{userName}</span>
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
            </span>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="sm:hidden mt-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
          >
            <div className="flex flex-col space-y-4 p-4">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Welcome, <span className="font-semibold">{userName}</span>
              </span>
              <span className="block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
              </span>
              <button
                onClick={onLogout}
                className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
