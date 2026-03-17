const ProductCard = ({ imgSrc, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-[20px] bg-white shadow-md hover:shadow-2xl transition-all duration-500 w-full h-[380px] sm:h-[400px] mx-auto"
    >
      {/* Image */}
      <img
        src={imgSrc}
        alt={text}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition"></div>

      {/* Text */}
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
          {text}
        </h3>
      </div>

      {/* Hover Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
        <button className="px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition">
          View Preview →
        </button>
      </div>
    </div>
  );
};

export default ProductCard;