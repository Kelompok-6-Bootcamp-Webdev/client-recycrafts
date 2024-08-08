import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow relative z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">Recycrafts</div>
        <nav className="font-semibold flex items-center gap-4">
          <a href="#" className="text-gray-800 hover:text-black mx-2">Beranda</a>
          <a href="page/product.html" className="text-gray-800 hover:text-black mx-2">Product</a>
          <a href="#" className="text-gray-800 hover:text-black mx-2">Donasi</a>
          <a href="#" className="text-gray-800 hover:text-black mx-2">FAQ</a>
        </nav>
        <a href="page/login.html" className="border border-gray-800 text-gray-800 px-4 py-1 rounded-2xl">Login</a>
      </div>
    </header>
  )
}

export default Header