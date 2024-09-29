import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  uuid: string;
  name: string;
  desc: string;
  price: number;
  image: string;
  url: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Ambil UUID dari URL
  const [product, setProduct] = useState<Product | null>(null);
  const uuid = localStorage.getItem('uuid');
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`, {
          headers: {
            'Authorization': `Bearer ${uuid}`
          }
        });
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id, uuid]);

  if (!product) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="min-h-[80vh] bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={product.url}
          alt={product.name}
          className="w-full h-64 lg:h-80 object-cover transition-transform transform hover:scale-105 duration-300"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.desc}</p>
          <p className="text-2xl font-bold text-gray-800 mb-4">Rp {product.price.toLocaleString()}</p>

          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105 duration-300"
            onClick={() => {
              const message = encodeURIComponent(`Halo, saya tertarik dengan produk ini!`);
              window.open(`https://wa.me/6289619258610?text=${message}`, '_blank');
            }}
          >
            Hubungi WA
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
