import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/reducers/productSlice';
import { Link } from 'react-router-dom'; 

import productImage1 from "../../assets/product1.jpeg";

const stripHtmlTags = (str) => {
  return str.replace(/<[^>]*>/g, '');
};

const ProductList = () => {
  const dispatch = useDispatch();

  const { items, status, error } = useSelector((state) => state.products);
  console.log(items, "Items");

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={product.image || productImage1} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{stripHtmlTags(product.description)}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
