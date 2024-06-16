import React, { useEffect, useRef, useState } from "react";

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
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 460; // Adjust this value based on your needs
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
      <div className="flex blackgraybg pb-16">
        <div className="w-0 md:w-[400px] hidden md:flex">
          <div
            className={`${
              isSticky ? "fixed w-[400px] top-0" : "mt-14 w-[400px]"
            } `}
          >
            <div className="flex flex-col text-white text-2xl xl:text-4xl gap-0 py-6 px-8 xl:px-12 font-serif font-medium">
              <button
                onClick={() => scrollIntoAppetizers()}
                className={` w-full text-center hover:text-[#ffa200] transition-all font-bold border-b-[0.5px] border-white py-4 xl:pb-6`}
              >
                Appetizers
              </button>
              <button
                onClick={() => scrollIntoBreakfast()}
                className={` w-full text-center hover:text-[#ffa200] transition-all font-bold border-b-[0.5px] border-white py-4 xl:py-6`}
              >
                Breakfast
              </button>
              <button
                onClick={() => scrollIntoLunch()}
                className={` w-full text-center hover:text-[#ffa200] transition-all font-bold border-b-[0.5px] border-white py-4 xl:py-6`}
              >
                Main Course
              </button>
              <button
                onClick={() => scrollIntoDesserts()}
                className={` w-full text-center hover:text-[#ffa200] transition-all font-bold border-b-[0.5px] border-white py-4 xl:py-6`}
              >
                Desserts
              </button>
              <button
                onClick={() => scrollIntoDrinks()}
                className={` w-full text-center hover:text-[#ffa200] transition-all font-bold border-white py-4 xl:py-6`}
              >
                Drinks
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-8/12"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <div className="w-full flex flex-col items-center">
            <div
              ref={appetizers}
              className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white pt-12 font-bold font-serif"
              data-aos="fade-down"
            >
              Appetizers
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
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={appetizers1}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Antipaso Platter</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={appetizers2}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Bruschetta</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={appetizers3}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Caprese Skewers</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={appetizers4}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Chicken Satay</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={appetizers5}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Deviled Eggs</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={appetizers6}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Mini Crab Cakes</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={appetizers7}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Mini Quesadillas</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={appetizers8}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Shrimp Cocktail</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={appetizers9}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">
                    Spinach and<br></br>Artichoke Dip
                  </div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
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
          <div className="w-full flex flex-col items-center">
            <div
              ref={breakfast}
              className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white pt-12 font-bold font-serif"
              data-aos="fade-down"
            >
              Breakfast
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
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={breakfast1}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tomato Sandwich</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={breakfast2}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Butter Pancake</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={breakfast3}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Egg Pancake</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={breakfast4}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Egg and Ham</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={breakfast5}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Waffles</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={breakfast6}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Fried Rice</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={breakfast7}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Spicy Noodle</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={breakfast8}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Ham Sandwich</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div
              ref={lunch}
              className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white pt-12 font-bold font-serif"
              data-aos="fade-down"
            >
              Main Course
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
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={wagyu}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Wagyu A5</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={ribeye}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Rib-eye Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={tenderloin}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Tenderloin Steak</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
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
          <div className="w-full flex flex-col items-center">
            <div
              ref={desserts}
              className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white pt-12 font-bold font-serif"
              data-aos="fade-down"
            >
              Desserts
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
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={dessert1}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Ice Cream</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={dessert2}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Cakek</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={dessert3}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Fruits</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={dessert4}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Coconut Water</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div
              ref={drinks}
              className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white pt-12 font-bold font-serif"
              data-aos="fade-down"
            >
              Drinks
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
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={drink1}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Apple Juice</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={drink2}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Guava Juice</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={drink3}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Ice Lemon Tea</div>
                </div>
              </div>
              <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
                <img
                  style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
                  src={drink4}
                  alt="Avatar"
                  class="image w-full h-full object-cover"
                />
                <div class="overlay">
                  <div class="text">Orange Juice</div>
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
