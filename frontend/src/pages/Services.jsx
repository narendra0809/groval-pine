import arrow from "../assets/arrow.svg";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

const Services = () => {
  return (
    <div>
      <div className="my-10 flex max-sm:flex-col max-sm:gap-3 sm:justify-between">
        <div className="justify-start text-2xl sm:text-5xl font-semibold">
          <span className="text-secondary">Premium </span>
          <span className="text-primary italic">Wooden Services</span>
          <span className="text-secondary sm:flex">
            <br />
            <span className="">Crafted to Last </span>
            <span className="hidden lg:flex items-center gap-2 ml-5">
              <img src={arrow} alt="" width={28} height={28} />
              <span className="text-primary text-2xl font-medium">
                Services Offered
              </span>
            </span>
          </span>
        </div>
        <p className="text-secondary  text-base sm:text-xl font-normal font-['Outfit']">
          Join us in shaping the global wooden products{" "}
          <br className="hidden sm:block" /> market through quality,
          sustainability, and trusted <br className="hidden sm:block" /> trade.
          Together, we can grow, create lasting value,
          <br className="hidden sm:block" /> and lead the industry forward.
        </p>
      </div>
      <div className="my-10 flex max-sm:flex-col max-sm:gap-3 sm:justify-between gap-10 sm:items-center">
        <div className="flex-1 max-sm:text-center">
          <img src={service1} alt="service1" className="h-80 rounded-4xl" />
        </div>
        <div className="flex-1">
          <h2 className="justify-start text-secondary text-3xl sm:text-5xl font-semibold mb-5">
            Elevate your International Trade
          </h2>
          <div className="self-stretch justify-start text-secondary text-base sm:text-xl font-normal font-['Outfit']">
            Streamline your global trade with our expert export-import
            consultancy, specializing in merchant exporting and tailored
            packaging solutions. From development to delivery, we ensure your
            products reach international markets safely and effectively.
          </div>
        </div>
      </div>
      <div className="my-10 flex items-center max-sm:flex-col max-sm:gap-3 sm:justify-between gap-10">
        <div className="flex-1">
          <div className="max-sm:block hidden flex-1 max-sm:text-center mb-4">
            <img src={service2} alt="service1" className="h-80 rounded-4xl" />
          </div>
          <h2 className="justify-start text-secondary text-3xl sm:text-5xl font-semibold mb-5">
            Grow together with us
          </h2>
          <div className="self-stretch justify-start text-secondary text-base sm:text-xl font-normal font-['Outfit']">
            Gain a strategic edge in global trade with our expert consultancy,
            specializing in FIBC bags, dehydrated vegetables, and wooden
            packaging solutions. We provide end-to-end guidance to streamline
            operations, ensure compliance, and boost efficiency.
          </div>
        </div>
        <div className="max-sm:hidden flex-1 max-sm:text-center">
          <img src={service2} alt="service1" className="h-80 rounded-4xl" />
        </div>
      </div>
      <div className="mt-10 mb-24 flex items-center max-sm:flex-col max-sm:gap-3 sm:justify-between gap-10">
        <div className="flex-1 max-sm:text-center">
          <img src={service3} alt="service1" className="h-80 rounded-4xl" />
        </div>
        <div className="flex-1">
          <h2 className="justify-start text-secondary text-3xl sm:text-5xl font-semibold mb-5">
            Become a market leader
          </h2>
          <div className="self-stretch justify-start text-secondary text-base sm:text-xl font-normal font-['Outfit']">
            Stay ahead in global trade with our tailored import consultancy
            services, designed to uncover new opportunities and streamline your
            supply chain. Partner with us to drive growth, maximize
            profitability, and confidently expand your international reach.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
