import Image from "next/image";
import HomeBanner from "@/components/Banners/HomeBanner";
import CustomButton from "@/components/button";
import CardSlider from "@/components/CardSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/css/home.css";
import ReviewCard from "@/components/ReviewCard";

export default function Home() {
  const cardsData = [
    {
      title: "Google Ads/ PPC",
      description:
        "To attract buyers towards your business need a proper Google Ad campaign. Our Ads professionals are expert in keyword research, creating Ad copy campaigns, and detailed reports for brand visibility. At our marketing Google ad, we provide server side tracking and product feed optimized services to engage buyers with pay-per-click advertising services. We ensure to provide the maximum output from our Ad campaign strategy.",
      image: "/images/vector.png",
    },
    {
      title: "Web Design / Development",
      description:
        "Dealing with low traffic and search ranking issues? At Marketing Shore, we optimize websites through strategic web designs, color schemes, and typography with improved page speed. Our experts create landing pages, effective sale funnels, and clear call-to-action insights to get more organic sales. Our team ensures to provide custom-designed websites, Self Editing Platform, and SSL for Auto Updates.",
      image: "/images/vector.png",
    },
    {
      title: "SEO Services",
      description:
        "Want to rank your website with an organic search on Google? Get our expert SEO services and improve your brand visibility on search engines. Whether you need local SEO, e-commerce SEO, link building, or optimization, our professional team will get it done for you. Our team is competent in generating organic leads within a short period using our successful SEO strategies.",
      image: "/images/vector.png",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build your online presence and reach your target audience with our social media marketing campaigns. Our team of social marketing experts provide customized marketing strategy, profile optimization, advertising management and proper monitoring reviews to generate leads for you. At Marketing shore, we cover facebook, instagram and youtube social media management campaigns to generate successful marketing results for your digital business.",
      image: "/images/vector.png",
    },
    {
      title: "Content Marketing",
      description:
        "To attract buyers towards your business need a proper Google Ad campaign. Our Ads professionals are expert in keyword research, creating Ad copy campaigns, and detailed reports for brand visibility. At our marketing Google ad, we provide server side tracking and product feed optimized services to engage buyers with pay-per-click advertising services. We ensure to provide the maximum output from our Ad campaign strategy.",
      image: "/images/vector.png",
    },
  ];
  return (
    <>
      <HomeBanner />
      {/* frame #1 */}
      <div className="flex justify-between pl-20 pt-16 pb-16">
        <div className="pr-20  w-1/2">
          <div className="text-4xl font-bold pt-20 leading-tight ">
            We Generate <span className="text-yellow-500">687%</span> More
            Revenue Than the Average Agency
          </div>
          <div className="text-xs pt-10">
            That’s right, Coalition Technologies is a web design and SEO
            services company that generates 687% more revenue than the average
            agency
          </div>
          <CustomButton
            text="Get a Free Audit"
            classes="font-bold px-5 py-2 mt-10"
          />
        </div>
        <Image src="/images/home-graph.png" width={550} height={550} />
      </div>
      {/* frame # 2 */}
      <div className="text-center">
        <div className="text-4xl font-bold pt-20 leading-tight ">
          We've done it <span className="text-yellow-500">for them</span>,<br />
          We can do it <span className="text-yellow-500">for you</span>
        </div>
        <div className="text-xs pt-10 leading-relaxed">
          We provide full-suite digital marketing packages in Web design, SEM,
          SEO & content services, all <br />
          strategically applied towards your business’s growth.
        </div>
        <div className="flex justify-between mt-10">
          <Image src="/images/home-slider/image-1.png" width={80} height={80} />
          <Image
            src="/images/home-slider/image-2.png"
            width={250}
            height={0}
            className="w-36 h-10 my-auto"
          />
          <Image
            src="/images/home-slider/image-3.png"
            width={250}
            height={100}
            className="w-36 h-10 my-auto"
          />
          <Image
            src="/images/home-slider/image-4.png"
            width={80}
            height={50}
            className="h-20 "
          />
          <Image
            src="/images/home-slider/image-5.png"
            width={80}
            height={100}
            className="h-20 "
          />
          <Image
            src="/images/home-slider/image-1.png"
            width={90}
            height={100}
          />
          <Image
            src="/images/home-slider/image-6.png"
            width={250}
            height={100}
            className="w-52 h-20 my-auto mr-10"
          />
        </div>
      </div>
      {/* frame #3 */}
      <div className="bg-slate-50 mt-36 w-full h-[1000px]">
        <div className="text-4xl font-bold pt-16 leading-tight text-center">
          Our Affordable Digital{" "}
          <div className="text-yellow-500"> Marketing Services</div>
        </div>
        <CardSlider cards={cardsData} />
        {/* <Image src="" width={100} height={100}/> */}
      </div>
      {/* frame # 4  */}
      <div className="frame-4 flex justify-between mt-50 pt-50">
        <div className="left-section">
          <div className="text-5xl font-bold text-white">
            Why Choose <span className="text-yellow-500">Marketing Shore?</span>
          </div>
          <div className="text-xs pt-10 leading-relaxed w-96 text-white font-extralight">
            Marketing Shore is one of the leading digital marketing agencies
            with a team of SEO experts, marketing strategists, content creators
            and branding professionals. We believe in growing our customer’s
            business with our calculated and customized marketing strategies.
          </div>
        </div>
        <div className="h-96 w-1 bg-yellow-500 mr-20 -mt-5">
          <div className="h-5 w-5 border-yellow-500 rounded-full  bg-yellow-500 mt-3 -ml-2"></div>
        </div>
        <div className="right-section h-96 w-1/2">
          <CustomButton
            text="Experience with global & local markets"
            classes="w-56 rounded-full"
          />
          <div className="text-xs pt-10 leading-relaxed text-white font-extralight">
            Marketing Shore has the experienced and professional staff to deal
            with any SEO difficulty, branding error, and marketing campaigns.
            Our staff with years of experience are expert enough to increase
            your business impact.
          </div>
          <button className=" border-yellow-500 border rounded-full text-sm py-2 px-5 w-72 text-white mt-4">
            Data-driven strategies
          </button>
          <button className=" border-yellow-500 border rounded-full text-sm py-2 px-5 w-72 text-white mt-4">
            ROI-focused approach
          </button>
          <button className=" border-yellow-500 border rounded-full text-sm py-2 px-5 w-72 text-white mt-4">
            Personalized solutions for every business
          </button>
        </div>
      </div>

      {/* frame #5 */}
      <div className="text-4xl font-black p-16 leading-tight text-center">
        {" "}
        Case Studies & <span className="text-yellow-500">Results</span>
      </div>
      <Image
        src="/images/frame-5.png"
        width={1000}
        height={1000}
        className="m-auto"
      />
      <Image
        src="/images/frame-5-2.png"
        width={1000}
        height={1000}
        className="m-auto mt-5"
      />
      <Image
        src="/images/frame-5-3.png"
        width={1000}
        height={1000}
        className="m-auto mt-5"
      />

      {/* frame#6 */}
      <div className="text-4xl font-black p-16 leading-tight text-center">
        {" "}
        Testimonials & <span className="text-yellow-500">Reviews</span>
      </div>
      <div className="flex justify-around">
        <div className="bg-yellow-800 rounded-full w-14 h-14 mt-4"></div>
        {/* review card # 1 */}
        <div>
          <div className="text-sm text-center w-56">
            My online sales have almost doubled since last year. Definitely a
            lot more traffic to the site … And I’m really happy with the team
            I’m working with.
          </div>
          <div className="flex justify-center  mt-5">
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 5.png" width={30} height={30} />
          </div>
          <div className="text-center mt-3 font-bold">
            David P. <div className="text-yellow-500">Paradiso Crossfit</div>
          </div>
        </div>
        {/* review card # 2 */}
        <div>
          <div className="text-sm text-center w-56">
            My online sales have almost doubled since last year. Definitely a
            lot more traffic to the site … And I’m really happy with the team
            I’m working with.
          </div>
          <div className="flex justify-center  mt-5">
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 1.png" width={30} height={30} />
          </div>
          <div className="text-center mt-3 font-bold">
            Sawako Y. <div className="text-yellow-500">Miki Miette </div>
          </div>
        </div>
        {/* review card #3 */}
        <div>
          <div className="text-sm text-center w-56">
            The number of people that were contacting us about membership became
            way more consistent; before Coalition it was peaks and valleys and
            uncertainty.
          </div>
          <div className="flex justify-center  mt-5">
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 1.png" width={30} height={30} />
            <Image src="/images/Star 5.png" width={30} height={30} />
          </div>
          <div className="text-center mt-3 font-bold">
            Norbert <div className="text-yellow-500">Dennis</div>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-full w-14 h-14 mt-4"></div>
      </div>

      {/* frame # 7 */}
      <div className="text-4xl font-black p-16 leading-tight text-center">
        {" "}
        Testimonials & <span className="text-yellow-500">Reviews</span>
      </div>
      <div className="flex justify-evenly mx-10">
        <ReviewCard
          image={"/images/reviewCard/card1.png"}
          title={
            "How UK Businesses Can Scale Marketing Without the Extra Costs"
          }
          date={"February 28, 2025"}
          readTime={"5 Min"}
        />
        <ReviewCard
          image={"/images/reviewCard/card2.png"}
          title={
            "How to Keep Customers Engaged After Their First Purchase"
          }
          date={"October 23, 2024"}
          readTime={"5 Min"}
        />
        <ReviewCard
          image={"/images/reviewCard/card3.png"}
          title={
            "Google Tag Manager Update: What You Need to Know Before April 2025"
          }
          date={"March 12, 2025"}
          readTime={"3 Min"}
        />
        <ReviewCard
          image={"/images/reviewCard/card4.png"}
          title={
            "How to Create Content that Resonates with Your Target Audience"
          }
          date={"October 14, 2024"}
          readTime={"5 Min"}
        />
      </div>
    </>
  );
}
