import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/thailand.jpg";
import Img2 from "../../assets/places/sreelanka.webp";
import Img3 from "../../assets/places/bali.webp";
import Img4 from "../../assets/places/maldives.webp";
import Img5 from "../../assets/places/Thailand_Featured.webp";


const PlacesData = [
  {
    img: Img1,
    title: "Thailand",
    location: "Southeast Asia",
    description: " Known for its beautiful beaches, rich culture, and vibrant cities, Thailand offers a blend of historical landmarks, tropical islands, and exciting nightlife.",
    price: 0,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Sree Lanka",
    location: "Indian Ocean",
    description:
      "2. A stunning island with golden beaches, ancient temples, and lush tea plantations, Sri Lanka is a perfect mix of culture, wildlife, and nature.",
    price: 0,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Bali",
    location: "Southeast Asia",
    description:
      " Indonesia’s most popular island, Bali is famous for its serene beaches, lush greenery, and spiritual retreats, offering both relaxation and adventure.",
    price: 0,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Maldives",
    location: "Indian Ocean ",
    description: " A tropical paradise of crystal-clear waters and luxury resorts, the Maldives is ideal for honeymooners and those seeking ultimate relaxation.",
    price: 0,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "lakshadweep",
    location: "	South India",
    description:
      " A group of serene islands in India, Lakshadweep is known for its unspoiled beaches, coral reefs, and a perfect escape into nature.",
    price: 0,
    type: "Cultural Relax",
  },
  
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
