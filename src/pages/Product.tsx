import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Product {
  uuid: string;
  name: string;
  desc: string;
  price: number;
  image: string;
  url: string;
  user: {
    name: string;
    email: string;
  };
}

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-4">
        {products.length > 0 ? <>
          <h1 className="text-2xl font-bold mb-8 text-center py-10">Daftar Produk</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link to={`/products/${product.uuid}`} key={product.uuid}> {/* Link ke halaman detail */}
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
          </div>
        </> :
          <><a href="/login" className='inset-0 flex justify-center items-center min-h-[80vh] text-2xl font-sans'>Silahkan Login Terlebih Dahulu</a></>}
      </div>
    </div>
  );
};

export default ProductPage;
