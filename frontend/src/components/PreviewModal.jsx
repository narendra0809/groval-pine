import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PreviewModal = ({ product, onClose }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigate = useNavigate();

  const images = product?.images || [];
  const video = product?.video;

  // lock scroll + esc close
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const escClose = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", escClose);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", escClose);
    };
  }, [onClose]);

  const slides = [
    ...images.map((img, i) => ({
      type: "image",
      src: img,
      key: `img-${i}`,
    })),
    ...(video ? [{ type: "video", src: video, key: "video" }] : []),
  ];

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl w-full max-w-5xl p-6 shadow-2xl overflow-y-auto max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white text-2xl hover:bg-black/70 transition shadow-lg"
        >
          &times;
        </button>

        <div className="flex flex-col lg:flex-row gap-8 mt-4 lg:mt-6">
          {/* Left Side: Images/Video Slider (60%) */}
          <div className="w-full lg:w-[60%]">
            {/* Main Slider */}
            <Swiper
              modules={[Navigation, Thumbs]}
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={20}
              className="mb-6"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.key}>
                  {slide.type === "image" ? (
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={slide.src}
                        alt=""
                        className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ) : (
                    <video
                      src={slide.src}
                      controls
                      className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-xl bg-black object-contain"
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail Slider */}
            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView={4}
              breakpoints={{
                640: { slidesPerView: 5 },
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.key}>
                  {slide.type === "image" ? (
                    <img
                      src={slide.src}
                      alt=""
                      className="h-16 sm:h-20 w-full object-cover rounded-lg cursor-pointer border hover:border-primary"
                    />
                  ) : (
                    <div className="h-16 sm:h-20 flex items-center justify-center bg-black text-white rounded-lg text-sm cursor-pointer border hover:border-primary">
                      VIDEO
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side: Description (40%) */}
          <div className="w-full lg:w-[40%] flex flex-col pt-2 lg:pt-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 lg:mb-6 leading-tight">
              {product?.text || "Premium Wood Product"}
            </h2>

            <p className="text-secondary text-lg lg:text-xl font-normal font-['Outfit'] mb-6 lg:mb-8 leading-relaxed">
              {product?.description || "High-quality custom wood product designed to meet your specific needs. Durable, elegant, and crafted with precision."}
            </p>

            {product?.features && product.features.length > 0 && (
              <div className="mb-8 flex-grow">
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-3 text-xl leading-none">&bull;</span>
                      <span className="text-secondary text-lg font-normal font-['Outfit'] leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={() => {
                onClose();
                navigate("/contact-us");
              }}
              className="mt-8 lg:mt-auto w-full px-5 py-3.5 bg-primary rounded-2xl flex justify-center items-center gap-2.5 hover:bg-opacity-90 transition-opacity cursor-pointer"
            >
              <span className="text-white text-xl sm:text-2xl font-semibold">
                Request Quote
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;