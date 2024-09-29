import React from 'react'

const Hero: React.FC = () => {
  return (
    <>
      <img src="/assets/image/rectangle-hero.svg" alt="bg"
        className="hidden lg:block absolute -z-10 top-0 object-contain object-left max-w-[1200px]" />
      <section className="py-10 lg:py-20 px-5 max-w-7xl mx-auto relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <div className="flex flex-col gap-3">
              <h1 className="text-5xl font-bold text-black">Bersama <span className="text-[#BE0575]">Daur Ulang</span></h1>
              <h1 className="text-5xl font-bold text-black">Ciptakan Dunia</h1>
              <h1 className="text-5xl font-bold text-black">Lebih Indah</h1>
            </div>
            <p className="pt-5 text-black lg:w-[400px] text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda modi maiores unde dicta, blanditiis ipsa autem reprehenderit accusantium praesentium quisquam.</p>
            <button
              className="mt-6 font-semibold bg-white text-orange-600 px-4 py-2 rounded-2xl shadow-lg shadow-[#FF751A] hover:bg-gray-100">Selengkapnya</button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="/assets/image/hero.svg" alt="Hero Image" className="w-[90%]" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero