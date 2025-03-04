import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductReview from "./ProductReview";
import { viewProduct,addToCart } from "../../redux/reducers/productSlice";
import { useNavigate } from 'react-router-dom'; 

const ProductView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  // Access product data from Redux store
  const { selectedProduct: product, loading, error } = useSelector((state) => state.products);

  const cartStatus = useSelector((state) => state.products.cartStatus);
  const cartError = useSelector((state) => state.products.cartError);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    dispatch(viewProduct(id));
  }, [dispatch, id]);

  // Set default selected variant and image when the product data is loaded
  useEffect(() => {
    if (product && product.variants.length > 0) {
      const defaultVariant = product.variants[0]; 
      setSelectedVariant(defaultVariant);
      setCurrentImage(defaultVariant.image); 
    }
  }, [product]);

  const handleColorChange = (selectedColorId) => {
    const newVariant = product.variants.find((variant) => variant.id === selectedColorId);
    setSelectedVariant(newVariant);
    setCurrentImage(newVariant.image);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  const handleAddToCart = () => {
    dispatch(addToCart({
      product_variant_id: selectedVariant.id,
      quantity: 1, 
      size: selectedSize,  
    }));
  };
  useEffect(() => {
    if (cartStatus === 'succeeded') {
      navigate('/cart'); 
    }
  }, [cartStatus, navigate]); 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!product) return <p>Product not found.</p>;

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
              {/* Show all images as small thumbnails */}
              {product.variants.map((variant) => (
                variant.image && (
                  <img
                    key={variant.id}
                    src={variant.image}
                    alt={`${variant.color} variant`}
                    className="w-16 h-16 rounded-lg shadow-md cursor-pointer"
                    onClick={() => setCurrentImage(variant.image)} // Change the current image when clicked
                  />
                )
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: product.description }}></p>
            <p className="text-2xl font-semibold text-yellow-500 mb-6">
              {product.discounted_price ? (
                <>
                  <span className="line-through">{product.price}</span>{" "}
                  {product.discounted_price}
                </>
              ) : (
                product.price
              )}
            </p>

            {/* Product Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Choose Color:</h3>
              <div className="flex space-x-4">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`py-2 px-4 rounded-lg font-semibold transition ${
                      selectedVariant && selectedVariant.id === variant.id
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleColorChange(variant.id)}
                  >
                    {variant.color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Choose Size:</h3>
              <div className="flex space-x-4">
                {selectedVariant &&
                  selectedVariant.sizes.map((size) => (
                    <button
                      key={size}
                      className={`py-2 px-4 rounded-lg font-semibold transition ${
                        selectedSize === size
                          ? "bg-yellow-500 text-black"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size}
                    </button>
                  ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition" onClick={handleAddToCart} disabled={cartStatus === 'loading'}>
              {cartStatus === 'loading' ? 'Adding...' : 'Add to Cart'}
              </button>
              {cartError && <p style={{ color: 'red' }}>{cartError}</p>}
              <button className="bg-gray-800 text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <ProductReview />

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Assuming related products are fetched in a similar manner */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
