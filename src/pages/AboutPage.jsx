import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      <div className="space-y-6">
        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-bold text-yellow-500">ShopNow</span>, your one-stop destination for the latest trends in fashion, electronics, home essentials, and more. We are passionate about offering high-quality products at competitive prices, ensuring you have the best shopping experience possible. With a user-friendly platform and exceptional customer service, we aim to make online shopping enjoyable and hassle-free.
          </p>
        </section>

        {/* Mission Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-bold text-yellow-500">ShopNow</span>, our mission is simple: to bring you the best products from around the world, straight to your doorstep. We strive to provide an extensive selection, unbeatable value, and reliable service that exceeds your expectations. Your satisfaction is at the heart of everything we do.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>
              <span className="font-bold">Wide Variety:</span> From fashion to tech, we offer an extensive range of products to meet your every need.
            </li>
            <li>
              <span className="font-bold">Affordable Prices:</span> Enjoy unbeatable deals and discounts every day.
            </li>
            <li>
              <span className="font-bold">Exceptional Service:</span> Our dedicated support team is here to assist you every step of the way.
            </li>
            <li>
              <span className="font-bold">Fast Delivery:</span> We partner with trusted logistics providers to ensure your orders arrive on time.
            </li>
          </ul>
        </section>

        {/* Our Journey Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2023, <span className="font-bold text-yellow-500">ShopNow</span> started as a small online marketplace with a vision to connect customers with premium products. Over the years, we’ve grown into a trusted brand, serving thousands of happy customers worldwide. Our journey has been fueled by innovation, dedication, and a commitment to excellence.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Become a part of the <span className="font-bold text-yellow-500">ShopNow</span> family today! Stay updated with the latest products, deals, and exclusive offers. Your satisfaction is our priority, and we can't wait to serve you.
          </p>
          <button className="bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Start Shopping
          </button>
        </section>
      </div>
    </div>
      <Footer />
    </div>
  );
}
