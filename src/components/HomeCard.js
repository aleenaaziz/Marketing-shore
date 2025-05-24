import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/css/home.css";

const HomeCard = ({ title, description, image }) => {
  return (
    <div className="ml-20 ">
      <div className="card bg-white rounded-xl mt-20 py-10 mb-20  pl-10 pr-8 border-black w-64 ">
        <img src={image} alt={title} className="object-cover w-10 mb-10" />
        <div>
          <h3 className="text-2xl absolute font-bold">{title}</h3>
          <p className="text-xs pt-4 leading-normal relative top-20  overflow-hidden  justify-center pr h-[430px]">
            {description}
          </p>

          <button className="btn border border-black px-3 py-2  relative bottom-0 top-0">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
