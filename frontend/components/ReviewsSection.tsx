import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ReviewsSection = () => {
  const reviews = [
    {
      rating: "10/10 Excellent",
      text: "A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the...",
      author: "Kyle G.",
      date: "Sep 25, 2024"
    },
    {
      rating: "10/10 Excellent",
      text: "The photos are just as the pictures and description state. Nice quiet area and great view of the...",
      author: "Cindy B.",
      date: "Sep 23, 2024"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 my-16 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Rating Header */}
        <div className="md:col-span-5 flex flex-col gap-2 mb-6">
          <div className="text-4xl font-bold text-emerald-700">9.8/10</div>
          <div className="text-xl text-gray-800">Exceptional</div>
          <div className="text-sm text-gray-600 flex items-center gap-1">
            24 reviews 
            <FontAwesomeIcon icon={faInfoCircle} className="h-3 w-3" />
          </div>
          <p className="text-sm text-gray-700">
            Reviews are verified unless labeled otherwise
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="flex-1 md:col-span-7">
          <div className="font-bold text-gray-800 mb-4">
            Recent Reviews
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className={`border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow ${
                  index === 1 ? 'hidden md:block' : ''
                }`}
              >
                <div className="mb-2">{review.rating}</div>
                <p className="text-gray-700 mb-2 line-clamp-3">
                  {review.text}
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Read more
                </a>
                <div className="mt-4 flex flex-col text-sm text-gray-600">
                  <span>{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center ">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-blue-600 border border-gray-700 rounded-full px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
        >
          See all 24 reviews
          <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default ReviewsSection;