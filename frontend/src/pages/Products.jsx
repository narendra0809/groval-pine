// import ProductCard from "../components/ProductCard";
// import product1 from "../assets/product1.jpg";
// import product2 from "../assets/product2.jpg";
// import product3 from "../assets/product3.jpg";
// import product4 from "../assets/product4.jpg";
// import product5 from "../assets/product5.jpg";
// import product6 from "../assets/product6.jpg";
// import product7 from "../assets/product7.jpg";
// import product8 from "../assets/product8.jpg";
// import product9 from "../assets/product9.jpg";
// import product10 from "../assets/product10.jpg";
// import product11 from "../assets/product11.jpg";
// import product12 from "../assets/product12.jpg";
// import { useState } from "react";

// const Products = () => {
//   const products = [
//     {
//       imgSrc: product1,
//       text: "Best Quality Wood Lids",
//     },
//     {
//       imgSrc: product2,
//       text: "Decorative Cupboard Lids",
//     },
//     {
//       imgSrc: product3,
//       text: "Best Quality Wooden Bins",
//     },
//     {
//       imgSrc: product4,
//       text: "Wooden Cladding",
//     },
//     {
//       imgSrc: product5,
//       text: "Glued Wood Shield",
//     },
//     {
//       imgSrc: product6,
//       text: "Wooden Door Frame",
//     },
//     {
//       imgSrc: product7,
//       text: "Wooden Flooring",
//     },
//     {
//       imgSrc: product8,
//       text: "Wooden Siding",
//     },
//     {
//       imgSrc: product9,
//       text: "Window Wood Frame",
//     },
//     {
//       imgSrc: product10,
//       text: "Wooden Frame",
//     },
//     {
//       imgSrc: product11,
//       text: "Wooden Decking Board",
//     },
//     {
//       imgSrc: product12,
//       text: "Wooden Planed Products",
//     },
//   ];
//   const [showMore, setShowMore] = useState(false);
//   return (
//     <div>
//       <div className="my-10 flex max-sm:flex-col max-sm:gap-3 sm:justify-between">
//         <div>
//           <p className="text-secondary text-2xl sm:text-5xl font-semibold">
//             Wood Products From{" "}
//           </p>
//           <p className="text-primary text-2xl sm:text-5xl font-semibold">
//             Softwood & Hardwood
//           </p>
//         </div>
//         <p className="text-lg text-secondary sm:text-xl font-normal font-['Outfit']">
//           We produce custom profiles in any shape and finish according to{" "}
//           <br className="hidden sm:block" />
//           cllent's order, decking boards, cladding, lining, flooring, door /
//           <br className="hidden sm:block" />
//           window scantlings, tongue-and-groove panels, artist frames,
//           <br className="hidden sm:block" /> and more.
//         </p>
//       </div>
//       <div className="my-20 mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {products.map((prod, idx) => (
//           <ProductCard
//             key={idx}
//             index={idx + 1}
//             imgSrc={prod.imgSrc}
//             text={prod.text}
//           />
//         ))}
//       </div>
//       {showMore && (
//         <div className="my-20 mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {products.map((prod, idx) => (
//             <ProductCard
//               key={idx}
//               index={idx + 1}
//               imgSrc={prod.imgSrc}
//               text={prod.text}
//             />
//           ))}
//         </div>
//       )}
//       {!showMore && (
//         <div className="w-full text-center mb-20">
//           <button
//             onClick={() => setShowMore(true)}
//             className="cursor-pointer w-56 h-14 px-5 py-2.5 bg-primary rounded-2xl inline-flex justify-center items-center gap-2.5"
//           >
//             <div className="justify-start text-white text-2xl font-semibold">
//               Explore More
//             </div>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import video1 from "../assets/videos/VID-20210523-WA0001.mp4";
import product1 from "../assets/Potatobox.png";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/Potatobox.png";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import product9 from "../assets/product9.jpg";
import product10 from "../assets/product10.jpg";
import product11 from "../assets/product11.jpg";
import product12 from "../assets/product12.jpg";
import PreviewModal from "../components/PreviewModal";

const products = [
  {
    imgSrc: product1,
    text: "Apple Bin",
    images: [product1, product2, product3],
    video: video1,
    category: "apple",
    description: "Premium quality wooden lids made from sustainable softwood. Perfect for long-term storage and durability.",
    features: ["Locally sourced wood", "High durability", "Eco-friendly finish"],
  },
  {
    imgSrc: product3,
    text: "Potato Bin",
    images: [product3, product6, product7],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "potato",
    description: "Heavy-duty wooden bins specifically designed for agricultural storage. Engineered to prevent moisture buildup.",
    features: ["Optimal airflow design", "Heavy load capacity", "Rot-resistant material"],
  },
];

const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProducts = products.filter(
    (prod) => filter === "all" || prod.category === filter
  );

  const handleCardClick = (prod) => {
    setSelectedProduct(prod);
    setModalOpen(true);
  };

  return (
    <div>
      <div className="my-10 flex max-sm:flex-col max-sm:gap-3 sm:justify-between">
        <div>
          <p className="text-secondary text-2xl sm:text-5xl font-semibold">
            Wood Products From{" "}
          </p>
          <p className="text-primary text-2xl sm:text-5xl font-semibold">
            Softwood & Hardwood
          </p>
        </div>
        <p className="text-lg text-secondary sm:text-xl font-normal font-['Outfit']">
          We produce custom profiles in any shape and finish according to{" "}
          <br className="hidden sm:block" />
          cllent's order, decking boards, cladding, lining, flooring, door
          <br className="hidden sm:block" />
          window scantlings, tongue-and-groove panels, artist frames,
          <br className="hidden sm:block" /> and more.
        </p>
      </div>

      {/* Category Filter Section */}
      <div className="flex justify-center gap-4 my-10 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={`cursor-pointer px-5 py-2.5 rounded-2xl font-semibold text-xl sm:text-2xl border ${filter === "all"
            ? "bg-primary text-white border-primary"
            : "border-secondary text-secondary bg-transparent"
            }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("apple")}
          className={`cursor-pointer px-5 py-2.5 rounded-2xl font-semibold text-xl sm:text-2xl border ${filter === "apple"
            ? "bg-primary text-white border-primary"
            : "border-secondary text-secondary bg-transparent"
            }`}
        >
          Apple Bins
        </button>
        <button
          onClick={() => setFilter("potato")}
          className={`cursor-pointer px-5 py-2.5 rounded-2xl font-semibold text-xl sm:text-2xl border ${filter === "potato"
            ? "bg-primary text-white border-primary"
            : "border-secondary text-secondary bg-transparent"
            }`}
        >
          Potato Bins
        </button>
      </div>


      <div className="my-20 mx-auto max-w-6xl px-4 xl:px-0 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {filteredProducts.map((prod, idx) => (
          <ProductCard
            key={idx}
            index={idx + 1}
            imgSrc={prod.imgSrc}
            text={prod.text}
            onClick={() => handleCardClick(prod)}
          />
        ))}
      </div>
      {modalOpen && selectedProduct && (
        <PreviewModal
          product={selectedProduct}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Products;
