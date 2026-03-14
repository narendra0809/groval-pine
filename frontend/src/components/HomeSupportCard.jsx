const HomeSupportCard = ({ imageUrls = [], header, features = [] }) => {
  return (
    <div className="w-96 h-[470px] flex flex-col gap-12 py-6 px-4 bg-secondary rounded-[20px] border border-[#C9A65D]">
      <div className="flex flex-col items-center">
        <img src={imageUrls[0]} alt="img" className="w-20 h-20" />
        {imageUrls.length > 1 && (
          <div className="flex">
            <img src={imageUrls[1]} alt="img" />
            <img src={imageUrls[2]} alt="img" />
            <img src={imageUrls[3]} alt="img" />
            <img src={imageUrls[2]} alt="img" />
            <img src={imageUrls[1]} alt="img" />
          </div>
        )}
      </div>
      <h3
        className={`${
          imageUrls.length > 1 && "m-[-9px]"
        } self-stretch text-center justify-start text-secondary text-2xl font-bold`}
      >
        {header}
      </h3>
      <ul className="flex flex-col gap-3 list-disc ml-6">
        {features.length > 0 &&
          features.map((fet, idx) => (
            <li
              className="justify-start text-secondary text-xl font-normal font-['Outfit']"
              key={idx}
            >
              {fet}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomeSupportCard;
