import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 shadow-lg w-screen fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white animate__animated animate__fadeIn">
                Health Link
              </span>
            </div>

            {/* Menu Items (Desktop) */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Services", "About Us", "Contact"].map((item) => (
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-white font-semibold hover:text-gray-300 transition duration-300"
                  key={item}
                >
                  {item}
                </a>
              ))}
              <button  onClick={()=> navigate("/Login")}
              className="bg-white text-purple-600 font-semibold py-1 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
                Login
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 transition-transform duration-500 ${
          menuOpen ? "transform translate-x-0" : "transform translate-x-full"
        } z-50`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-8">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {["Home", "Services", "AboutUs", "Contact"].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              className="text-white text-2xl font-semibold hover:text-gray-300 transition duration-300"
              key={item}
            >
              {item}
            </a>
          ))}
          <button onClick={()=> navigate("/Login") }
            className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
