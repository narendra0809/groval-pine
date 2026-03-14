const Gallery = () => {

    const images = Array.from({ length: 10 }, (_, i) =>
        new URL(`../assets/Pink Pine Image/Frame ${i + 1}.png`, import.meta.url).href
    );

    const videos = Array.from({ length: 16 }, (_, i) =>
        new URL(`../assets/Pink Pine Video/Sequence 02_${i + 1}.mp4`, import.meta.url).href
    );

    return (
        <div className="my-16">

            {/* Heading */}
            <div className="my-10 grid md:grid-cols-2 gap-6 items-start">

                {/* Heading */}
                <div>
                    <p className="text-secondary text-2xl md:text-5xl font-semibold">
                        Our Visual
                    </p>
                    <p className="text-primary text-2xl md:text-5xl font-semibold">
                        Gallery
                    </p>
                </div>

                {/* Description */}
                <p
                    className="text-secondary text-base sm:text-xl font-normal md:pt-3"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                >
                    Discover our manufacturing process, wood craftsmanship and product
                    showcases through images and videos.
                </p>

            </div>

            {/* Images */}
            <p className="text-secondary text-2xl md:text-4xl font-semibold mb-6">
                Image Showcase
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`gallery-${index}`}
                        className="rounded-xl h-72 w-full object-cover hover:scale-105 transition cursor-pointer"
                    />
                ))}
            </div>

            {/* Videos */}
            <p className="text-secondary text-2xl md:text-4xl font-semibold mb-6 mt-12">
                Video Showcase
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                    <video
                        key={index}
                        src={video}
                        controls
                        className="rounded-xl h-72 w-full object-cover"
                    />
                ))}
            </div>

        </div>
    );
};

export default Gallery;