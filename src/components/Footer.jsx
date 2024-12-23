import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We are an eCommerce platform offering a wide range of products
              with fast delivery and excellent customer service.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-yellow-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-yellow-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm hover:text-yellow-400">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">Email: support@shopnow.com</li>
              <li className="text-sm">Phone: +1 234 567 890</li>
              <li className="text-sm">Address: 123 eCommerce St, Shop City</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-white hover:text-yellow-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.85 3.64 8.83 8.41 9.78v-6.95h-2.54v-2.83h2.54v-2.1c0-3.01 1.79-4.71 4.48-4.71 1.3 0 2.64.24 2.64.24v2.84h-1.5c-1.47 0-1.92.92-1.92 1.86v2.24h3.08l-1.06 2.83h-2.02v6.95c4.77-.95 8.41-4.93 8.41-9.78 0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-white hover:text-yellow-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M23 3c-1 .4-2.1.6-3.2.7 1.2-.7 2.1-1.8 2.5-3.1-1.1.7-2.3 1.1-3.5 1.3-1.1-1.2-2.7-1.9-4.4-1.9-3.3 0-5.9 2.7-5.9 6s2.6 6 5.9 6c-1.1 0-2.2-.3-3.2-.8.4 1.1 1.4 1.8 2.6 1.9-1 .8-2.3 1.3-3.6 1.3-1.1 0-2.2-.2-3.2-.6 1.2 1.2 2.6 1.8 4.1 1.8 4.9 0 9-4.1 9-9 0-.1 0-.3 0-.4 1-.7 1.8-1.5 2.5-2.5z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="text-white hover:text-yellow-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2c3.3 0 3.7.01 5 .07 1.3.06 2.4.28 3.3 1.1 1.1.8 1.6 2.1 1.6 3.9 0 1.4-.1 2.3-.4 2.9-.3.7-.7 1.2-1.3 1.6-.5.3-1.1.5-1.6.7-.6.1-1.2.2-1.7.2-1.3 0-1.6-.02-2.1-.07-.5-.03-.9-.14-1.3-.3-.5-.2-.9-.5-1.2-.9-.4-.4-.7-.8-.9-1.3-.1-.4-.2-.8-.3-1.3-.1-.5-.2-.9-.2-1.3s.1-.9.2-1.3c.1-.5.2-.9.3-1.3.2-.5.5-.9.9-1.3.3-.4.7-.7 1.2-.9.4-.2.9-.3 1.3-.3.5-.04.8-.06 2.1-.06h.2c1.4 0 1.7.02 2.1.07.6.1 1.1.3 1.6.7.5.4.9.9 1.2 1.5.2.6.3 1.3.4 2.1 0 .7 0 1.5-.1 2.1-.1.7-.3 1.3-.6 1.7-.2.3-.5.6-.9.9-.5.3-1.1.5-1.6.7-.7.2-1.3.3-1.8.3h-2.1c-1.2 0-1.7-.02-2.2-.07-.6-.05-1.1-.18-1.5-.4-.4-.3-.7-.7-.9-1.1-.2-.4-.3-.8-.3-1.3-.1-.4-.1-.8-.1-1.2 0-.4.1-.8.1-1.2.1-.4.2-.8.3-1.2.2-.4.5-.8.9-1.1.4-.3.9-.5 1.5-.7.4-.2.9-.3 1.5-.3h2.1c1.3 0 1.7.02 2.2.07.6.05 1.1.18 1.5.4.4.3.7.7.9 1.1.2.4.3.8.3 1.3.1.4.1.8.1 1.2 0 .4-.1.8-.1 1.2-.2.4-.3.8-.5 1.1-.6.3-1.1.6-1.7.9-.5.2-1.1.4-1.7.6-.5.2-.9.3-1.4.3-1.3 0-1.7-.02-2.2-.07-.6-.05-1.1-.18-1.5-.4-.4-.3-.7-.7-.9-1.1-.2-.4-.3-.8-.3-1.3.1-.4.1-.8.1-1.2s-.1-.8-.1-1.2c0-.4.1-.8.1-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ShopNow. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
