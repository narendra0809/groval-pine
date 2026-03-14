import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import img1 from "../assets/contact/IMG-20210617-WA0020.jpg";
import img6 from "../assets/contact/IMG-20210617-WA0023.jpg";
import img7 from "../assets/contact/IMG-20210716-WA0026.jpg";
import img8 from "../assets/contact/IMG-20210716-WA0028.jpg";
import img9 from "../assets/contact/IMG-20210915-WA0057.jpg";
import img2 from "../assets/contact/1000424403.jpg";
import img3 from "../assets/contact/1000424426.jpg";
import img4 from "../assets/contact/IMG-20211124-WA0012.jpg";
import img5 from "../assets/contact/IMG-20211126-WA0020.jpg";
import "swiper/css";

const images = [img1, img2, img3, img4, img5];
export default function Carousel() {
  const swiperRef = useRef(null);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={2}
      spaceBetween={16}
      loop={true}
      speed={10000}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      onInit={(swiper) => {
        swiper.wrapperEl.style.transitionTimingFunction = "linear";
      }}
      modules={[Autoplay]}
      onReachEnd={() => {
        if (swiperRef.current) {
          swiperRef.current.params.speed = 10000;
          swiperRef.current.slideToLoop(0);
          setTimeout(() => {
            swiperRef.current.params.speed = 10000;
          }, 600);
        }
      }}
      className="mySwiper"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`slide-${idx}`}
            className="w-full h-64 object-cover rounded-4xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
