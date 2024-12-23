import React from "react";
import { Link } from "react-router-dom"; 
import ProductList from "../pages/ishop/ProductList"; 
import heroImage from "../assets/banner.avif"; 

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white mt-8"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to ShopNow</h1>
          <p className="text-lg mb-6">
            Your one-stop shop for the latest trends in fashion, electronics,
            and more!
          </p>
          <Link
            to="/shop"
            className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Product List Section */}
      <ProductList />

      {/* Promotional Banner */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Special Offer: 20% Off on Your First Order!
        </h2>
        <p className="text-lg mb-6">
          Sign up now and get exclusive discounts and offers directly to your
          inbox!
        </p>
        <Link
          to="/signup"
          className="bg-yellow-500 py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  );
}
