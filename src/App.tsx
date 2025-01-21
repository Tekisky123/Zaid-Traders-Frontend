import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { User } from "./types";
import Login from "./pages/Login";
import DriverDashboard from "./pages/DriverDashboard";
import CashierDashboard from "./pages/CashierDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle login and save user to localStorage
  const handleLogin = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  // Handle logout and remove user from localStorage
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        {user && (
          <Navbar
            userName={user.name}
            role={user.role}
            onLogout={handleLogout}
          />
        )}
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            {/* If no user is logged in, show the login page */}
            {!user ? (
              <Route path="/" element={<Login onLogin={handleLogin} />} />
            ) : (
              // Redirect logged-in user to the appropriate dashboard based on their role
              <>
                <Route
                  path="/"
                  element={<Navigate to={`/${user.role}-dashboard`} />}
                />
                <Route
                  path="/driver-dashboard"
                  element={
                    user.role === "driver" ? (
                      <DriverDashboard />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
                <Route
                  path="/cashier-dashboard"
                  element={
                    user.role === "cashier" ? (
                      <CashierDashboard />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
                <Route
                  path="/admin-dashboard"
                  element={
                    user.role === "admin" ? (
                      <AdminDashboard />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
              </>
            )}
            {/* Fallback to login if the user tries to access any other path */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
