import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import productImage1 from "../../assets/product1.jpeg";
import productImage2 from "../../assets/product1.jpeg";
import productImage3 from "../../assets/product1.jpeg";
import ProductReview from "./ProductReview";

const ProductView = () => {
  // Example static product data
  const product = {
    id: 1,
    name: "Product Name",
    description:
      "This is a detailed description of the product. It explains features, benefits, and other relevant details about the product.",
    price: "$49.99",
    colors: {
      red: [productImage1, productImage2],
      blue: [productImage3],
    },
    sizes: ["S", "M", "L", "XL"],
  };

  const relatedProducts = [
    { id: 2, name: "Product 2", image: productImage1, price: "$39.99" },
    { id: 3, name: "Product 3", image: productImage2, price: "$59.99" },
    { id: 4, name: "Product 4", image: productImage3, price: "$29.99" },
  ];

  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [currentImage, setCurrentImage] = useState(product.colors["red"][0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentImage(product.colors[color][0]);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        {/* Back to Products Link */}
        <Link
          to="/"
          className="text-yellow-500 font-semibold hover:underline mb-8 block"
        >
          &larr; Back to Products
        </Link>

        {/* Product View Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex flex-col items-center">
            <img
              src={currentImage}
              alt={product.name}
              className="w-full max-w-md rounded-lg shadow-md mb-4"
            />
            <div className="flex space-x-2">
              {product.colors[selectedColor].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedColor} variant ${index + 1}`}
                  className="w-16 h-16 rounded-lg shadow-md cursor-pointer"
                  onClick={() => setCurrentImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-semibold text-yellow-500 mb-6">
              {product.price}
            </p>

            {/* Product Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Choose Color:</h3>
              <div className="flex space-x-4">
                {Object.keys(product.colors).map((color) => (
                  <button
                    key={color}
                    className={`py-2 px-4 rounded-lg font-semibold transition ${
                      selectedColor === color
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleColorChange(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Choose Size:</h3>
              <div className="flex space-x-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-2 px-4 rounded-lg font-semibold transition ${
                      selectedSize === size
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition">
                Add to Cart
              </button>
              <button className="bg-gray-800 text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <ProductReview/>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <div
                key={related.id}
                className="bg-white p-4 rounded-lg shadow-md text-center"
              >
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{related.name}</h3>
                <p className="text-yellow-500 font-semibold">{related.price}</p>
                <Link
                  to={`/product/${related.id}`}
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
