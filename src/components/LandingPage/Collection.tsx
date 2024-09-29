import React from 'react'

const Collection: React.FC = () => {
  return (
    <section className=" bg-white relative z-40 lg:py-20">
      <div className="max-w-7xl mx-auto bg-[#FB9C67] flex items-center rounded-lg">
        <div className="lg:w-1/2 container mx-auto px-5 py-5 lg:px-20">
          <h1 className="text-white">SUMMER 2024</h1>
          <h2 className="text-2xl lg:text-5xl py-4 font-bold text-[#19397F] tracking-wide">NEW COLLECTION</h2>
          <p className="text-white lg:w-[300px]">We know how large objects will act, but things on a small scale.</p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">SHOP NOW</button>
        </div>
        <div className="hidden lg:block w-1/2">
          <img src="/assets/image/new-collect.svg" alt="Hero Image" className="w-[100%]" />
        </div>
      </div>
    </section>
  )
}

export default Collection