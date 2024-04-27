import React, { useEffect, useRef, useState } from "react";

import appetizers1 from '../../assets/images/food/appetizers/Antipasto Platter.webp'
import appetizers2 from '../../assets/images/food/appetizers/Bruschetta.webp'
import appetizers3 from '../../assets/images/food/appetizers/Caprese Skewers.webp'
import appetizers4 from '../../assets/images/food/appetizers/Chicken Satay.webp'
import appetizers5 from '../../assets/images/food/appetizers/Deviled eggs.webp'
import appetizers6 from '../../assets/images/food/appetizers/Mini Crab Cakes.webp'
import appetizers7 from '../../assets/images/food/appetizers/Mini Quesadillas.webp'
import appetizers8 from '../../assets/images/food/appetizers/Shrimp cocktail.webp'
import appetizers9 from '../../assets/images/food/appetizers/Spinach and Artichoke Dip.webp'
import appetizers10 from '../../assets/images/food/appetizers/Stuffed mushrooms.webp'

import wagyu from "../../assets/images/food/Wagyu A5.webp";
import ribeye from "../../assets/images/food/ribeye.webp";
import sirloin from "../../assets/images/food/sirloin.webp";
import tenderloin from "../../assets/images/food/tenderloin.webp";

function Menu() {
  const [isSticky, setIsSticky] = useState(false);

  const [selected, setSelected] = useState(0);

  const appetizers = useRef(null);
  const breakfast = useRef(null);
  const lunch = useRef(null);
  const dinner = useRef(null);
  const desserts = useRef(null);
  const drinks = useRef(null);

  const scrollIntoAppetizers = () => {
    appetizers.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollIntoBreakfast = () => {
    breakfast.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollIntoLunch = () => {
    lunch.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollIntoDinner = () => {
    dinner.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollIntoDesserts = () => {
    desserts.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollIntoDrinks = () => {
    drinks.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 390; // Adjust this value based on your needs
      const thresholdEnd = 10000;
      // Check if scroll position is beyond the threshold
      setIsSticky(scrollPosition > threshold && scrollPosition < thresholdEnd);
    };

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full flex">
      <div className="flex blackgraybg">
        <div className="w-0 md:w-3/12 hidden md:flex">
          <div
            className={`${
              isSticky ? "fixed w-[400px] top-0" : ""
            }  w-full w-[400px]  mt-16`}
          >
            <div className="flex flex-col text-white text-4xl gap-8 py-6 px-8 font-serif font-medium">
              <button
                onClick={() => scrollIntoAppetizers()}
                className={` w-full text-left hover:text-[#ffa200] transition-all`}
              >
                Appetizers
              </button>
              <button
                onClick={() => scrollIntoBreakfast()}
                className={` w-full text-left hover:text-[#ffa200] transition-all`}
              >
                Breakfast
              </button>
              <button
                onClick={() => scrollIntoLunch()}
                className={` w-full text-left hover:text-[#ffa200] transition-all`}
              >
                Lunch
              </button>
              <button
                onClick={() => scrollIntoDinner()}
                className={` w-full text-left hover:text-[#ffa200] transition-all`}
              >
                Dinner
              </button>
              <button
                onClick={() => scrollIntoDesserts()}
                className={` w-full text-left hover:text-[#ffa200] transition-all`}
              >
                Desserts
              </button>
              <button
                onClick={() => scrollIntoDrinks()}
                className={` w-full text-left hover:text-[#ffa200] transition-all`}
              >
                Drinks
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-9/12"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <div>
            <div
              ref={appetizers}
              className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white py-12 font-bold font-serif"
            >
              Appetizers
            </div>
            <div className="w-full flex flex-between flex-wrap flex-row">
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={appetizers1}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Antipaso Platter</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={appetizers2}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Bruschetta</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={appetizers3}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Caprese Skewers</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={appetizers4}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Chicken Satay</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={appetizers5}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Deviled Eggs</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={appetizers6}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Mini Crab Cakes</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={appetizers7}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Mini Quesadillas</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={appetizers8}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Shrimp Cocktail</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={appetizers9}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Spinach and Artichoke Dip</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={appetizers10}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Stuffed Mushrooms</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              ref={breakfast}
              className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white py-12 font-bold font-serif"
            >
              Breakfast
            </div>
            <div className="w-full flex flex-between flex-wrap bg-black flex-row">
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={wagyu}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Wagyu A5</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={ribeye}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Rib-eye Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={tenderloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tenderloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={sirloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Sirloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={wagyu}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Wagyu A5</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={ribeye}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Rib-eye Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={tenderloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tenderloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={sirloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Sirloin Steak</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              ref={lunch}
              className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white py-12 font-bold font-serif"
            >
              Lunch
            </div>
            <div className="w-full flex flex-between flex-wrap bg-black flex-row">
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={wagyu}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Wagyu A5</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={ribeye}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Rib-eye Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={tenderloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tenderloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={sirloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Sirloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={wagyu}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Wagyu A5</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={ribeye}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Rib-eye Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={tenderloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tenderloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={sirloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Sirloin Steak</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              ref={dinner}
              className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white py-12 font-bold font-serif"
            >
              Dinner
            </div>
            <div className="w-full flex flex-between flex-wrap bg-black flex-row">
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={wagyu}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Wagyu A5</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={ribeye}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Rib-eye Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={tenderloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tenderloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={sirloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Sirloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={wagyu}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Wagyu A5</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={ribeye}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Rib-eye Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={tenderloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tenderloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={sirloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Sirloin Steak</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              ref={desserts}
              className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white py-12 font-bold font-serif"
            >
              Desserts
            </div>
            <div className="w-full flex flex-between flex-wrap bg-black flex-row">
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={wagyu}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Wagyu A5</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={ribeye}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Rib-eye Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={tenderloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tenderloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={sirloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Sirloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={wagyu}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Wagyu A5</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={ribeye}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Rib-eye Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={tenderloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tenderloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={sirloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Sirloin Steak</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              ref={drinks}
              className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white py-12 font-bold font-serif"
            >
              Drinks
            </div>
            <div className="w-full flex flex-between flex-wrap bg-black flex-row">
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={wagyu}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Wagyu A5</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={ribeye}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Rib-eye Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={tenderloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tenderloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={sirloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Sirloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={wagyu}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Wagyu A5</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={ribeye}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Rib-eye Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={tenderloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tenderloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px]">
                <img
                  src={sirloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Sirloin Steak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
