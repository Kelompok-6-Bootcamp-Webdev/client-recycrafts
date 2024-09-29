import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<{ name: string, email: string, role: string } | null>(null);

  // Fungsi untuk toggle menu di mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(user);

  // Fungsi untuk toggle dropdown profil
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Fungsi untuk logout
  const handleLogout = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/logout`);
      localStorage.removeItem('uuid');
      setUser(null);
      window.location.href = '/';  // Redirect setelah logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // Cek UUID di localStorage dan fetch user data jika sudah login
  useEffect(() => {
    const uuid = localStorage.getItem('uuid');
    if (uuid) {
      axios.get(`${import.meta.env.VITE_API_URL}/me`, {
        headers: {
          'Authorization': `Bearer ${uuid}` // Mengirimkan UUID sebagai Bearer token
        }
      })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  return (
    <header className="bg-white shadow relative z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Brand / Logo */}
        <a href='/' className="text-lg font-bold">Recycrafts</a>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex font-semibold items-center gap-4">
          <a href="/" className="text-gray-800 hover:text-black mx-2">
            Beranda
          </a>
          <a href="/products" className="text-gray-800 hover:text-black mx-2">
            Product
          </a>
          <a href="/" className="text-gray-800 hover:text-black mx-2">
            Donasi
          </a>
          <a href="/" className="text-gray-800 hover:text-black mx-2">
            FAQ
          </a>
        </nav>

        {/* Conditionally render login or user dropdown */}
        {user ? (
          <div className="relative hidden lg:block">
            <button onClick={toggleDropdown} className="flex items-center space-x-2 text-gray-800">
              <span className='font-semibold'>{user.name}</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg flex flex-col">
                <span className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Email: {user.email}</span>
                <span className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Role: {user.role}</span>
                {/* <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Profile
                </a> */}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <a
            href="/login"
            className="hidden lg:block border border-gray-800 text-gray-800 px-4 py-1 rounded-2xl"
          >
            Login
          </a>
        )}
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 w-64 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className="mt-10 flex flex-col gap-4">
            <a href="/" className="text-gray-800 hover:text-black mx-2">
              Beranda
            </a>
            <a href="/products" className="text-gray-800 hover:text-black mx-2">
              Product
            </a>
            <a href="/" className="text-gray-800 hover:text-black mx-2">
              Donasi
            </a>
            <a href="/" className="text-gray-800 hover:text-black mx-2">
              FAQ
            </a>
          </nav>

          {/* Conditionally render login or user logout for mobile */}
          {user ? (
            <div className="mt-8">
              <span className="block text-gray-800 px-4 py-1 rounded-2xl">{user.name}</span>
              <button
                onClick={handleLogout}
                className="block mt-4 border border-gray-800 text-gray-800 px-4 py-1 rounded-2xl"
              >
                Logout
              </button>
            </div>
          ) : (
            <a
              href="/login"
              className="block mt-8 border border-gray-800 text-gray-800 px-4 py-1 rounded-2xl"
            >
              Login
            </a>
          )}
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
