import React from 'react'
import { Link } from "react-router-dom";

import productImage1 from "../../assets/product1.jpeg";
import productImage2 from "../../assets/product1.jpeg";
import productImage3 from "../../assets/product1.jpeg";
import productImage4 from "../../assets/product1.jpeg";

const ProductList = () => {
  return (
    <div>
       {/* Featured Products Section */}
       <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={productImage1}
                alt="Product 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Product Name 1</h3>
              <p className="text-gray-500 text-sm mb-4">
                Short description of the product.
              </p>
              <Link
                to="/product/1"
                className="text-yellow-500 font-semibold hover:underline"
              >
                View Product
              </Link>
            </div>
            {/* Product 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={productImage2}
                alt="Product 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Product Name 2</h3>
              <p className="text-gray-500 text-sm mb-4">
                Short description of the product.
              </p>
              <Link
                to="/product/2"
                className="text-yellow-500 font-semibold hover:underline"
              >
                View Product
              </Link>
            </div>
            {/* Product 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={productImage3}
                alt="Product 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Product Name 3</h3>
              <p className="text-gray-500 text-sm mb-4">
                Short description of the product.
              </p>
              <Link
                to="/product/3"
                className="text-yellow-500 font-semibold hover:underline"
              >
                View Product
              </Link>
            </div>
            {/* Product 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={productImage4}
                alt="Product 4"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Product Name 4</h3>
              <p className="text-gray-500 text-sm mb-4">
                Short description of the product.
              </p>
              <Link
                to="/product/4"
                className="text-yellow-500 font-semibold hover:underline"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductList
