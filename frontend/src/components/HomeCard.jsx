const HomeCard = ({ imgSrc, text, width }) => {
  return (
    <div className="group relative overflow-hidden rounded-[20px] cursor-pointer">

      {/* Image */}
      <img
        src={imgSrc}
        alt={text}
        width={width}
        className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition"></div>

      {/* Text */}
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-white text-xl md:text-2xl font-semibold uppercase tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;