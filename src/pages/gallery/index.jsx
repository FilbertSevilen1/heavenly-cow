import React, { useState } from "react";

import appetizers1 from "../../assets/images/food/appetizers/Antipasto Platter.webp";
import appetizers2 from "../../assets/images/food/appetizers/Bruschetta.webp";
import appetizers3 from "../../assets/images/food/appetizers/Caprese Skewers.webp";
import appetizers4 from "../../assets/images/food/appetizers/Chicken Satay.webp";
import appetizers5 from "../../assets/images/food/appetizers/Deviled eggs.webp";
import appetizers6 from "../../assets/images/food/appetizers/Mini Crab Cakes.webp";
import appetizers7 from "../../assets/images/food/appetizers/Mini Quesadillas.webp";
import appetizers8 from "../../assets/images/food/appetizers/Shrimp cocktail.webp";
import appetizers9 from "../../assets/images/food/appetizers/Spinach and Artichoke Dip.webp";
import appetizers10 from "../../assets/images/food/appetizers/Stuffed mushrooms.webp";

import breakfast1 from "../../assets/images/food/breakfast/breakfast1.webp";
import breakfast2 from "../../assets/images/food/breakfast/breakfast2.webp";
import breakfast3 from "../../assets/images/food/breakfast/breakfast3.webp";
import breakfast4 from "../../assets/images/food/breakfast/breakfast4.webp";
import breakfast5 from "../../assets/images/food/breakfast/breakfast5.webp";
import breakfast6 from "../../assets/images/food/breakfast/breakfast6.webp";
import breakfast7 from "../../assets/images/food/breakfast/breakfast7.webp";
import breakfast8 from "../../assets/images/food/breakfast/breakfast8.webp";

import wagyu from "../../assets/images/food/Wagyu A5.webp";
import ribeye from "../../assets/images/food/ribeye.webp";
import sirloin from "../../assets/images/food/sirloin.webp";
import tenderloin from "../../assets/images/food/tenderloin.webp";

import dessert1 from "../../assets/images/food/desserts/icecream.webp";
import dessert2 from "../../assets/images/food/desserts/cake.webp";
import dessert3 from "../../assets/images/food/desserts/fruits.webp";
import dessert4 from "../../assets/images/food/desserts/icecreamcake.webp";

import drink1 from "../../assets/images/food/drinks/applejuice.webp";
import drink2 from "../../assets/images/food/drinks/guava.webp";
import drink3 from "../../assets/images/food/drinks/icelemontea.webp";
import drink4 from "../../assets/images/food/drinks/orangejuice.webp";

function Gallery() {
  const [image, setImage] = useState([
    appetizers1,
    appetizers2,
    appetizers3,
    appetizers4,
    appetizers5,
    appetizers6,
    appetizers7,
    appetizers8,
    appetizers9,
    appetizers10,
    breakfast1,
    breakfast2,
    breakfast3,
    breakfast4,
    breakfast5,
    breakfast6,
    breakfast7,
    breakfast8,
    wagyu,
    ribeye,
    sirloin,
    tenderloin,
    dessert1,
    dessert2,
    dessert3,
    dessert4,
    drink1,
    drink2,
    drink3,
    drink4,
  ]);
  const generateGalleryImage = () => {
    if (image) {
      return image.map((item, index) => {
        return (
          <div class="p-1 container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] hover:scale-105 hover:z-50 transition-all">
            <img
              src={item}
              alt="Avatar"
              class="image w-full h-full object-cover"
              style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
            />
          </div>
        );
      });
    }
  };
  return (
    <div className="w-full flex">
      <div className="w-full flex blackgraybg pb-16 flex justify-center">
        <div className="w-full md:w-10/12 xl:w-8/12 text-white flex flex-col items-center">
          <div
            data-aos="fade-down"
            className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white pt-12 font-bold font-serif"
          >
            Gallery
          </div>
          <div className="flex items-center mt-4 mb-8">
            <div
              data-aos="fade-right"
              data-aos-delay="250"
              data-aos-duration="500"
              className="w-16 md:w-32 h-[2px] bg-[#ffa200] mx-8"
            ></div>
            <div
              className=""
              data-aos="fade"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path fill="#ffa200" d="m19 12l-7 10l-7-10l7-10" />
              </svg>
            </div>
            <div
              className=""
              data-aos="fade"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path fill="#ffa200" d="m19 12l-7 10l-7-10l7-10" />
              </svg>
            </div>
            <div
              className=""
              data-aos="fade"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path fill="#ffa200" d="m19 12l-7 10l-7-10l7-10" />
              </svg>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="250"
              data-aos-duration="500"
              className="w-16 md:w-32 h-[2px] bg-[#ffa200] mx-8"
            ></div>
          </div>
          <div className="w-full flex flex-between flex-wrap flex-row">
            {generateGalleryImage()}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gallery;
