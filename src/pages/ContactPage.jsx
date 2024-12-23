import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed">
            Have questions, feedback, or need assistance? Our team is here to help. Feel free to reach out to us using the contact form or the information provided below.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Email:</h3>
              <p className="text-gray-700">support@shopnow.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone:</h3>
              <p className="text-gray-700">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address:</h3>
              <p className="text-gray-700">
                123 E-Commerce Street, Suite 100 <br />
                New York, NY 10001, USA
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}
