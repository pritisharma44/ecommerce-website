import React from 'react'

const ProductReview = () => {
  return (
    <div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {[
              {
                id: 1,
                name: "John Doe",
                profileImage: "https://via.placeholder.com/50", 
                rating: 4,
                review: "Great product! Totally worth the price.",
              },
              {
                id: 2,
                name: "Jane Smith",
                profileImage: "https://via.placeholder.com/50", 
                rating: 5,
                review: "Loved it. High quality and fast shipping.",
              },
              {
                id: 3,
                name: "Alex Johnson",
                profileImage: "https://via.placeholder.com/50", 
                rating: 3,
                review: "Good features, but the delivery was delayed.",
              },
            ].map((review) => (
              <div
                key={review.id}
                className="flex items-start space-x-4 mb-6 last:mb-0"
              >
                {/* Profile Image */}
                <img
                  src={review.profileImage}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  {/* Reviewer Name and Rating */}
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={index < review.rating ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={`w-5 h-5 ${
                            index < review.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 17.27l5.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-gray-700 mt-2">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default ProductReview
