import React from "react";
import { Link } from "react-router-dom";
import productImage from "../../assets/product1.jpeg"; 
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const ProductCart = () => {
  // Example static cart items
  const cartItems = [
    {
      id: 1,
      name: "Product Name 1",
      price: "$49.99",
      quantity: 2,
      image: productImage,
    },
    {
      id: 2,
      name: "Product Name 2",
      price: "$29.99",
      quantity: 1,
      image: productImage,
    },
  ];

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
      0
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

        {/* Cart Items Section */}
        {cartItems.length > 0 ? (
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.price} each</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center space-x-2">
                    <button className="bg-gray-200 px-3 py-1 rounded-lg">
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      className="w-12 text-center border-gray-300 rounded-lg"
                      readOnly
                    />
                    <button className="bg-gray-200 px-3 py-1 rounded-lg">
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold">{`$${(
                    parseFloat(item.price.slice(1)) * item.quantity
                  ).toFixed(2)}`}</p>
                  <button className="text-red-500 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">
            Your cart is empty.
          </p>
        )}

        {/* Cart Total and Checkout */}
        {cartItems.length > 0 && (
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-8">
            <div className="flex justify-between text-xl font-semibold mb-4">
              <span>Total:</span>
              <span>{`$${calculateTotal().toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between space-x-4">
              <Link
                to="/"
                className="bg-gray-800 text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-700 transition w-full text-center"
              >
                Continue Shopping
              </Link>
              <Link
                to="/checkout"
                className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition w-full text-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default ProductCart;
