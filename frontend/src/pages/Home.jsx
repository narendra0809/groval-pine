import mailLogo from "../assets/uiw_mail.svg";
import facebookLogo from "../assets/prime_facebook.svg";
import instaLogo from "../assets/basil_instagram-solid.svg";
import whatsLogo from "../assets/ri_whatsapp-fill.svg";
import woodVid from "../assets/woods.mp4";
import Carousel from "../components/Carousel";
import HomeCard from "../components/HomeCard";
import homeCard1 from "../assets/homeCard1.jpg";
import homeCard2 from "../assets/homeCard2.jpg";
import homeCard3 from "../assets/home/bin.jpeg";
import homeCard4 from "../assets/home/WhatsApp Image 2025-09-06 at 1.59.21 PM.jpeg";
import { useNavigate } from "react-router-dom";
import teamImage from "../assets/ri_team-fill.svg";
import star1 from "../assets/star1.svg";
import star2 from "../assets/star2.svg";
import star3 from "../assets/star3.svg";
import circleLogo from "../assets/logo.png";
import handshake from "../assets/handshake.svg";
import security from "../assets/security.svg";
import HomeSupportCard from "../components/HomeSupportCard";
import ProductInfoSection from "../components/ProductInfoSection";
import appleBox from "../assets/Potatobox.png";
import potatoBox from "../assets/Potatobox.png";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="my-12">
      <div className="flex justify-between mb-5">
        <div className="flex flex-col md:min-w-[600px] lg:min-w-[900px]">
          <div className="sm:text-7xl  text-3xl sm:leading-[101px] leading-[45px]">
            <span className="text-zinc-800 sm:text-8xl font-bold">
              Timeless Charm of{" "}
            </span>
            <span className="text-primary font-semibold italic">Wood </span>
          </div>
          <p
            className="mt-2 text-zinc-800 text-[18px] leading-7 font-normal"
            style={{
              fontFamily: "Outfit,san-serif",
            }}
          >
            Inspired by the principle of delivering complete satisfaction to our
            customers, we strive to serve your requests in the most <br />{" "}
            appropriate ways. With our professional team in the industry and
            forestry, equipped with modern tools and advanced processes
          </p>
        </div>
        <div className="hidden lg:flex flex-col gap-3">
          <a
            href="mailto:info@grovolpine.com "
            className="bg-dark rounded-full p-2 hover:scale-105 transition"
          >
            <img src={mailLogo} alt="mail" className="aspect-square w-7 h-7" />
          </a>

          <a
            href="https://wa.me/919893309179"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark rounded-full p-2 hover:scale-105 transition"
          >
            <img src={whatsLogo} alt="whatsapp" className="aspect-square w-7 h-7" />
          </a>
        </div>
      </div>
      <div className="mt-2 w-full mx-auto">
        <video
          src={woodVid}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className="rounded-4xl object-cover w-full h-96"
        />
      </div>
      <div className="my-20">
        <Carousel />
      </div>
      <div className="my-10 flex max-md:flex-col max-sm:gap-3 sm:justify-between">
        <div className="">
          <p className="text-secondary text-2xl md:text-5xl font-semibold">
            Wood Products From{" "}
          </p>
          <p className="text-primary text-2xl md:text-5xl font-semibold">
            Softwood & Hardwood
          </p>
        </div>
        <p
          className="text-secondary text-base sm:text-xl font-normal"
          style={{
            fontFamily: "Outfit,san-serif",
          }}
        >
          We produce custom profiles in any shape and finish according to{" "}
          <br className="max-sm:hidden" />
          cllent's order, decking boards, cladding, lining, flooring, door /
          <br className="max-sm:hidden" />
          window scantlings, tongue-and-groove panels, artist frames,
          <br className="max-sm:hidden" /> and more.
        </p>
      </div>
      <div className="my-10 flex flex-col gap-5">
        <div className="flex max-sm:flex-col gap-5">
          <HomeCard
            imgSrc={homeCard1}
            text={"Best Quality WOODEN FRAME"}
            width={689}
          />
          <HomeCard imgSrc={homeCard2} text={"BEST QUALITY"} width={577} />
        </div>
        <div className="flex max-sm:flex-col gap-5">
          <HomeCard
            imgSrc={homeCard3}
            text={"BEST QUALITY WOODEN BINS"}
            width={577}
          />
          <HomeCard
            imgSrc={homeCard4}
            text={"WOODEN PLANED products"}
            width={689}
          />
        </div>
      </div>
      <div className="mt-16 mb-14 text-center">
        <button
          onClick={() => navigate("/products")}
          className="cursor-pointer w-56 h-14 px-5 py-2.5 bg-primary rounded-2xl inline-flex justify-center items-center gap-2.5"
        >
          <div className="justify-start text-white text-2xl font-semibold">
            Explore More
          </div>
        </button>
      </div>
      <ProductInfoSection
        title="Apple Bulkbins"
        subtitle="Premium Wooden Apple Storage Bins"
        image={appleBox}
        description="Manufactured from seasoned, heat-treated and fumigated Nordic spruce wood, these bulk bins provide exceptional strength and durability. Designed for long service life even in demanding storage and transport conditions."
        features={[
          "High-quality seasoned Nordic wood",
          "Heat treated and fumigated for durability",
          "Strong construction for long service life",
          "Suitable for controlled atmosphere storage systems",
          "Designed for easy and efficient handling",
          "Environment-friendly natural wood construction",
        ]}
        dimensions={[
          { size: "1200 x 1000 x 750 mm", capacity: "0.8 m³ – 400 kg" },
          // { size: "1200 x 1000 x 900 mm", capacity: "1.0 m³ – 500 kg" },
        ]}
      />

      <ProductInfoSection
        title="Potato Bulkbins"
        subtitle="Heavy-Duty Storage Bins for Potatoes"
        image={potatoBox}
        description="High-strength wooden bulk bins designed specifically for safe potato storage and transportation. Built from premium seasoned pine and spruce wood to ensure durability, ventilation and long operational life."
        features={[
          "Constructed from high-quality seasoned pine and spruce wood",
          "Robust and proven structural design",
          "Side wall air inlets for improved ventilation and cooling",
          "Ideal for bulk potato storage and controlled ventilation systems",
          "Supplied in CKD format to reduce transportation costs",
          "Economical and environmentally friendly",
          "Manufactured in India with customizable sizes available",
          "Capacity: 500 kg to 1300 kg",
        ]}
        dimensions={[
          { size: "1600 x 1200 x 1200 mm", capacity: "2.0 m³ – 1000 kg" },
          { size: "1400 x 1200 x 1200 mm", capacity: "1.8 m³ – 900 kg" },
          { size: "1600 x 1200 x 1230 mm", capacity: "2.1 m³ – 1300 kg" },
        ]}
        reverse
      />

      <div className="my-10 flex max-sm:flex-col max-sm:items-center gap-4">
        <HomeSupportCard
          imageUrls={[teamImage, star1, star2, star3]}
          header={"Professionalism & Ethics"}
          features={[
            "High standards of professionalism and ethics in all operations. ",
            "Long-term partnerships based on trust and mutual success.",
          ]}
        />
        <HomeSupportCard
          imageUrls={[handshake]}
          header={"Reliable Supply"}
          features={[
            "Deep understanding of customer needs in various industries.",
            "Long-term flexibility & adaptability to market changes.",
            "Wide range of high-quality products.",
          ]}
        />
        <HomeSupportCard
          imageUrls={[security]}
          header={"Customer Orientation"}
          features={[
            "Extensive knowledge and experience in general trading.",
            "Support in achieving customers' business goals.",
            "Tailored solutions adapted to customer needs.",
          ]}
        />
      </div>
      <div className="my-18 flex justify-center">
        <img src={circleLogo} alt="circle" />
      </div>
    </div>
  );
};

export default Home;
