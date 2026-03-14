import { useNavigate } from "react-router-dom";

const ProductInfoSection = ({
    title,
    subtitle,
    image,
    description,
    features,
    dimensions,
    reverse = false,
}) => {
    const navigate = useNavigate();

    return (
        <section className="py-14">
            <div
                className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center ${reverse ? "md:flex-row-reverse" : ""
                    }`}
            >
                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="w-full max-w-xl object-contain"
                    />
                </div>

                {/* Content */}
                <div>
                    {/* Heading */}
                    <div className="mb-6">
                        <p className="text-secondary text-2xl md:text-5xl font-semibold">
                            {title}
                        </p>
                        <p className="text-primary text-lg md:text-xl font-medium">
                            {subtitle}
                        </p>
                    </div>

                    {/* Description */}
                    <p
                        className="text-secondary text-base md:text-lg leading-7"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                        {description}
                    </p>

                    {/* Features */}
                    <ul
                        className="mt-6 space-y-2 text-secondary text-base md:text-lg"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                        {features.map((f, i) => (
                            <li key={i} className="flex gap-2">
                                <span>•</span>
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Dimensions Table */}
                    <div className="mt-10">
                        <div className="flex justify-between text-secondary text-lg font-semibold border-b pb-2">
                            <span>Dimensions</span>
                            <span>Capacity</span>
                        </div>

                        {dimensions.map((d, i) => (
                            <div
                                key={i}
                                className="flex justify-between py-3 text-secondary border-b"
                            >
                                <span>{d.size}</span>
                                <span>{d.capacity}</span>
                            </div>
                        ))}

                        <p
                            className="mt-3 text-secondary text-sm"
                            style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                            Other dimensions and capacities available on request
                        </p>
                    </div>

                    {/* Button */}
                    <button 
                        onClick={() => navigate("/contact-us")}
                        className="mt-10 px-10 py-4 bg-primary rounded-full text-white text-lg font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                        Request Quote →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductInfoSection;