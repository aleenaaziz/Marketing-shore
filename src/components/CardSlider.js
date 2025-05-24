"use client";

import dynamic from "next/dynamic";
import HomeCard from "./HomeCard";
import "@/css/home.css";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

const CardSlider = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#FBCD3E",
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          paddingTop: "12px",
          paddingRight: "120px",
        }}
      >
        <ul style={{ display: "flex", gap: "8px", padding: 0 }}>{dots}</ul>
      </div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-4">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2">
            <HomeCard {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
