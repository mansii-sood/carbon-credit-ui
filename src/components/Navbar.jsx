import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = ({ userName }) => {

  const navigate = useNavigate();

  const handleLogout = () => {

    navigate("/"); 
  };

  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow">
      {/* Logo / Title */}
      <h1 className="text-xl font-semibold flex items-center gap-2">
        🌱 Carbon Credit Dashboard
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <span>Welcome, {userName}</span>
        <button onClick={handleLogout} className="hover:underline">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar
