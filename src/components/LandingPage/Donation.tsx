import React from 'react'

const Donation: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">Alur Donasi Sampah</h2>
        <div className="flex justify-center py-10">
          <img src="assets/image/Step.svg" alt="step" width="1000" height="1000" className="w-[70%]" />
        </div>
        <button
          className="mt-6 font-semibold bg-white text-black px-5 py-3 border border-black rounded-xl shadow-lg hover:bg-gray-500  hover:text-white">Ayo
          Donasi Sekarang</button>
      </div>
    </section>
  )
}

export default Donation