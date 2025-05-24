import React from "react";
import "@/css/about.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="main">
        <div className="left-section">
          <div className="text-5xl font-black pt-72 leading-tight text-center text-white">
            {" "}
            About The <span className="text-yellow-500">Agency</span>
          </div>
          <div className="text-xs text-white w-2/3 pl-36 leading-relaxed pt-4">
            We are passionate about partnering with businesses to drive real
            growth that makes a tangible impact.
          </div>
        </div>
        <div className="right-section">
          <Image src="/images/about/main.png" width={550} height={550} />
        </div>
      </div>

      {/* frame # 2 */}
      <div className="second-frame">
        <div className="text-5xl font-bold text-black pt-20 pl-36">
          Our Purpose
        </div>
        <div className="font-bold text-black text-lg pl-36 pt-10 w-3/4">
          Established in 2018, We are Digital Nomads HQ – your digital marketing
          agency. What are our values? It’s simple…
        </div>
        <div className="text-xs text-black px-36 pt-4">
          We’re about long-term partnerships, excellent results & true
          integrity. These are the bedrocks of Digital Nomads HQ – from the top
          down. There is simply no other way to do business as far as we’re
          concerned. You can count on us – just read our reviews… Our commitment
          to excellence means the standards are high. Crazy high… We surround
          ourselves with excellent people. We do excellent marketing, and we get
          excellent results. We’ve got you and we’ve got your marketing!
        </div>
        <div className=" min-h-screen p-6 pt-20">
          <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full">
            {/* Image 1 - Top Left */}
            <div className="col-span-2 row-span-3">
              <Image
                src="/images/about/frame-2-1.png"
                alt="Image 1"
                width={300}
                height={300}
                className=" object-cover rounded-md shadow-md mt-28 ml-20"
              />
            </div>

            {/* Image 2 - Top Right */}
            <div className="col-start-4 col-span-3 row-span-2">
              <Image
                src="/images/about/frame-2-2.png"
                width={500}
                height={500}
                alt="Image 2"
                className=" object-cover rounded-md shadow-md"
              />
            </div>

            {/* Image 3 - Bottom Right */}
            <div className="col-start-3 col-span-4 row-start-4 row-span-3">
              <Image
                src="/images/about/frame-2-3.png"
                alt="Image 3"
                width={500}
                height={500}
                className=" object-cover rounded-md shadow-md -mt-44 ml-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* frame # 3 */}
      <div className="text-5xl text-black text-center font-bold p-20">
        Our Values
      </div>
      <div className="flex justify-around px-40">
        {/* card # 1 */}
        <div className="card bg-yellow-100 rounded-xl px-4 py-24 max-w-sm text-black space-y-4 ">
          {/* Small heading */}
          <div className="text-sm font-medium">01. Creative</div>
          <hr className="border-t border-black w-72 pb-10" />

          {/* Main bold text */}
          <p className="font-semibold text-lg leading-snug w-72 pr-6">
            We believe that no idea is off-limits, we strive to be unique and
            are not afraid to take risks.
          </p>

          {/* Small paragraph */}
          <p className="text-xs text-black/70 w-72 pt-4">
            Creativity can come in all shapes and forms, not just design. This
            mindset flows through all facets of the way we work. "No" should
            rarely be an acceptable answer.
          </p>
        </div>
        {/* card#2 */}
        <div className="card bg-yellow-100 rounded-xl px-4 py-24 max-w-sm text-black space-y-4 ">
          {/* Small heading */}
          <div className="text-sm font-medium">02. Collaborative</div>
          <hr className="border-t border-black w-72 pb-10" />

          {/* Main bold text */}
          <p className="font-semibold text-lg leading-snug w-72 pr-6">
          We work like part of your team. Our strong relationships drive success and outcomes.
          </p>

          {/* Small paragraph */}
          <p className="text-xs text-black/70 w-72 pt-4">
          By supporting each other and sharing knowledge we create long-term relationships based on trust. We're honest in our approach, take pride in our work, and we celebrate the wins together.
          </p>
        </div>
        {/* card#3  */}
        <div className="card bg-yellow-100 rounded-xl px-4 py-24 max-w-sm text-black space-y-4 ">
          {/* Small heading */}
          <div className="text-sm font-medium">03. Compassionate</div>
          <hr className="border-t border-black w-72 pb-10" />

          {/* Main bold text */}
          <p className="font-semibold text-lg leading-snug w-72 pr-6">
          We do the right thing, even when no one is watching. We treat each project like it's our own.
          </p>

          {/* Small paragraph */}
          <p className="text-xs text-black/70 w-72 pt-4">
          We built our business through word of mouth and happy repeat clients. By always delivering more than what's expected, we bring value beyond the contract.
          </p>
        </div>
      </div>

      {/* frame # 4 */}
      <div className="bg-black min-h-screen text-white font-sans p-6 h-[1500px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Row 1 */}
          <div className="relative top-0">
            <TeamCard
              name="Fuzail Anwar"
              role="CEO\nSEO EXPERT"
              image="/images/about/fuzail.png"
            />
          </div>

          <div className="relative top-96">
            <TeamCard
              name="Muhammad Hasan"
              role="SEO Executive /\nMarketing Member"
              image="/images/about/hasan.png"
            />
          </div>

          <div className="relative top-0">
            <TeamCard
              name="Muhammad Huzaifa"
              role="SEO Executive /\nMarketing Member"
              image="/images/about/huzaifa.png
              "
            />
          </div>

          {/* Row 2 */}
          <div className="relative top-36">
            <TeamCard
              name="Sarim Raza"
              role="Web Designer /\nWordPress Developer"
              image="/images/about/sarim.png"
            />
          </div>

          <div className="relative top-36 left-[440px]">
            <TeamCard
              name="Bilal Ahmed"
              role="SEO Executive /\nProjects Manager"
              image="/images/about/bilal.png"
            />
          </div>

        </div>
      </div>
    </>
    
  );
  function TeamCard({ name, role, image }) {
    return (
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="rounded-lg mb-4 w-[350px] h-full object-cover"
        />
        <h2 className="text-lg font-semibold">{name}</h2>
        <hr className="bg-white"/>
        <p className="text-sm whitespace-pre-line">{role}</p>
      </div>
    );
  }
};

export default About;
