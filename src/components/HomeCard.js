import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/css/home.css";

const HomeCard = ({ title, description, image }) => {
  return (
    <div className="ml-20">
      <div className="card bg-white rounded-xl mt-20 overflow-hidden py-10 pl-10 pr-8  border border-black w-64 relative">
        <img src={image} alt={title} className="object-cover w-10 mb-10" />
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-xs pt-4 leading-normal absolute justify-center pr-6 ">
            {description}
          </p>

          <button className="btn border border-black px-3 py-2 absolute bottom-0 mb-10">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
