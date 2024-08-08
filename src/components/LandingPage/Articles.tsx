import React from 'react'

const Articles: React.FC = () => {
  return (
    <section className="py-20 bg-[#FB9C67]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#19397F]">Artikel</h2>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-64 bg-white p-4 m-4 rounded-xl shadow">
            <img src="assets/image/dummy-artikel.svg" alt="Article Image" className="rounded" />
            <h3 className="mt-4 text-lg font-bold">Mahasiswa berhasil</h3>
            <p className="mt-2 text-gray-700 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magni.
            </p>
          </div>
          <div className="w-64 bg-white p-4 m-4 rounded-xl shadow">
            <img src="assets/image/dummy-artikel.svg" alt="Article Image" className="rounded" />
            <h3 className="mt-4 text-lg font-bold">Mahasiswa berhasil</h3>
            <p className="mt-2 text-gray-700 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magni.
            </p>
          </div>
          <div className="w-64 bg-white p-4 m-4 rounded-xl shadow">
            <img src="assets/image/dummy-artikel.svg" alt="Article Image" className="rounded" />
            <h3 className="mt-4 text-lg font-bold">Mahasiswa berhasil</h3>
            <p className="mt-2 text-gray-700 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magni.
            </p>
          </div>
        </div>
        <button
          className="mt-6 font-semibold bg-white text-black px-5 py-3 border border-black rounded-xl shadow-lg hover:bg-gray-500  hover:text-white">Cek
          Artikel Lainnya</button>
      </div>
    </section>
  )
}

export default Articles