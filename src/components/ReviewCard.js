import React from 'react'

const ReviewCard = ({ image, title, date, readTime }) => {
    return (
      <div className="max-w-sm rounded-lg border border-black overflow-hidden shadow-sm w-72">
        {/* Image */}
        <img
          src={image}
          alt="Card"
          className="w-full h-48 object-cover"
        />
  
        {/* Content */}
        <div className="p-4">
          <h3 className="text-sm text-yellow-500 font-semibold text-gray-800 leading-snug">
            {title}
          </h3>
  
          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className='text-xs'>{date}</span>
            </div>
  
            <span className='text-xs'>{readTime} read</span>
          </div>
  
          {/* Button */}
          <div className="mt-2">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-full">
              Read more
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReviewCard;
  

