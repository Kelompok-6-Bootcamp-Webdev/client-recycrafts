/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Articles: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Dapatkan UUID dari localStorage
        const uuid = localStorage.getItem('uuid');
        console.log(uuid);

        if (!uuid) {
          throw new Error("User belum login!");
        }

        // Fetch data dari API dengan menyertakan UUID sebagai header
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
          headers: {
            'Authorization': `Bearer ${uuid}`
          }
        });

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section className="py-10 lg:py-20 bg-[#FB9C67]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#19397F]">Artikel</h2>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-64 bg-white p-4 m-4 rounded-xl shadow">
            <img src="/assets/image/dummy-artikel.svg" alt="Article Image" className="rounded" />
            <h3 className="mt-4 text-lg font-bold">Mahasiswa berhasil</h3>
            <p className="mt-2 text-gray-700 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magni.
            </p>
          </div>
          <div className="w-64 bg-white p-4 m-4 rounded-xl shadow">
            <img src="/assets/image/dummy-artikel.svg" alt="Article Image" className="rounded" />
            <h3 className="mt-4 text-lg font-bold">Mahasiswa berhasil</h3>
            <p className="mt-2 text-gray-700 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magni.
            </p>
          </div>
          <div className="w-64 bg-white p-4 m-4 rounded-xl shadow">
            <img src="/assets/image/dummy-artikel.svg" alt="Article Image" className="rounded" />
            <h3 className="mt-4 text-lg font-bold">Mahasiswa berhasil</h3>
            <p className="mt-2 text-gray-700 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magni.
            </p>
          </div>
        </div>

        {/* <div className="max-w-7xl px-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <Link to={`/products/${product.uuid}`} key={product.uuid}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300">
                <img
                  src={product.url}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <p className="text-gray-800 font-bold">Rp {product.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div> */}

        <button
          className="mt-6 font-semibold bg-white text-black px-5 py-3 border border-black rounded-xl shadow-lg hover:bg-gray-500  hover:text-white" onClick={() => alert('Coming Soon')}>Cek Artikel Lainnya</button>
      </div>
    </section>
  )
}

export default Articles