import React from "react";
import background from "../assets/images/background/background.webp";
import beef from "../assets/images/background/beef.webp";
import chef from "../assets/images/chef/chef1.webp";
import "../css/bg.css";
import { Carousel } from "flowbite-react";

import wagyu from "../assets/images/food/Wagyu A5.webp";
import ribeye from "../assets/images/food/ribeye.webp";
import sirloin from "../assets/images/food/sirloin.webp";
import tenderloin from "../assets/images/food/tenderloin.webp";

import restaurant1 from "../assets/images/restaurant/restaurant1.webp";
import restaurant2 from "../assets/images/restaurant/restaurant2.webp";
import restaurant3 from "../assets/images/restaurant/restaurant3.webp";
import restaurant4 from "../assets/images/restaurant/restaurant4.webp";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col">
      <Carousel
        data-aos="fade-up"
        data-aos-once="true"
        slide={true}
        className="w-full h-96 md:h-[900px] shadow-2xl"
      >
        <div className="w-full shadow-xl">
          <img
            src={background}
            className="object-cover h-full w-full brightness-[60%]"
          ></img>
          <div className="w-full absolute top-1/2 bottom-1/2 text-white text-center mt-[-60px] md:mt-[-125px]">
            <div className="w-10/12 xl:w-[1024px] mx-auto font-bold drop-shadow-2xl shadow-black text-4xl md:text-6xl xl:text-8xl font-sans font-bold">
              Savor the Flavor at Our Beef Heaven.
            </div>
          </div>
        </div>
        <div className="w-full shadow-xl">
          <img
            src={beef}
            className="object-cover h-full w-full brightness-[60%]"
          ></img>
          <div className="w-full absolute top-1/2 bottom-1/2 text-white text-center mt-[-60px] md:mt-[-125px]">
            <div className="w-10/12 xl:w-[1024px] mx-auto font-bold drop-shadow-2xl shadow-black text-4xl md:text-6xl xl:text-8xl font-sans font-bold">
              The Ultimate Level of Taste in the Universe.
            </div>
          </div>
        </div>
      </Carousel>

      <div className="w-full flex flex-between flex-col md:flex-row">
        <img
          src={chef}
          className="w-full mt-4 md:mt-0 max-h-[500px] md:max-h-[700px] md:w-1/4 object-cover"
          data-aos="fade-down"
          data-aos-duration="1000"
        ></img>
        <div
          className="flex flex-col justify-center w-full md:w-3/4 max-h-auto md:max-h-[700px] p-12 md:p-24 blackbg"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <p className="flex text-white text-3xl md:text-4xl xl:text-5xl font-serif font-medium mb-16">
            "Beef is not just a meal, but a masterpiece."
          </p>
          <p className="flex text-white text-lg md:text-xl xl:text-3xl font-serif text-justify mb-16">
            Beef is the ultimate main ingredient. From the rich marbling of
            ribeye to the lean tenderness of filet mignon, beef offers an array
            of cuts that lend themselves to a myriad of cooking techniques.
            Whether slow-cooked to perfection in a savory stew, seared to a
            mouthwatering crust on the grill, or braised until fork-tender in a
            fragrant sauce, beef elevates every dish it graces. With its ability
            to impart depth and complexity to any recipe, beef is the
            indispensable ingredient that transforms ordinary meals into
            extraordinary culinary experiences.
          </p>
          <p className="flex text-white text-lg md:text-2xl xl:text-3xl font-serif text-justify">
            - Chef Joe
          </p>
        </div>
      </div>
      <div className="blackgraybg" data-aos="fade-down" data-aos-duration="500">
        <div className="w-full flex items-center flex-col mt-8 py-12">
          <p className="mb-4 text-3xl md:text-4xl xl:text-6xl text-white text-center font-bold font-serif">
            Our Menus
          </p>
          <div className="flex items-center">
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
        </div>
        <div className="w-full flex flex-between flex-wrap flex-row">
          <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
            <img
              src={wagyu}
              alt="Avatar"
              class="image w-full h-full object-cover"
              style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
            />
            <div class="overlay">
              <div class="text">Wagyu A5</div>
            </div>
          </div>
          <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
            <img
              src={ribeye}
              alt="Avatar"
              class="image w-full h-full object-cover"
              style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
            />
            <div class="overlay">
              <div class="text">Rib-eye Steak</div>
            </div>
          </div>
          <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
            <img
              src={tenderloin}
              alt="Avatar"
              class="image w-full h-full object-cover"
              style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
            />
            <div class="overlay">
              <div class="text">Tenderloin Steak</div>
            </div>
          </div>
          <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
            <img
              src={sirloin}
              alt="Avatar"
              class="image w-full h-full object-cover"
              style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
            />
            <div class="overlay">
              <div class="text">Sirloin Steak</div>
            </div>
          </div>
        </div>
        <div className=" border-b-2 border-zinc-400 text-2xl text-white text-center py-12 font-bold font-serif">
          <button
            onClick={() => navigate("/menu")}
            className="mb-8 w-64 md:w-96 p-6 text-white border-2 border-white rounded-xl hover:scale-105 hover:bg-zinc-900 active:scale-100 transition-all"
          >
            Check here for more!
          </button>
        </div>
      </div>
      <div className="blackbg2" data-aos="fade-down" data-aos-duration="500">
      <div className="w-full flex items-center flex-col mt-8 py-12">
          <p className="mb-4 text-3xl md:text-4xl xl:text-6xl text-white text-center font-bold font-serif">
            Our Restaurants
          </p>
          <div className="flex items-center">
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
        </div>
        
        <div className="w-full flex flex-between flex-wrap flex-row">
          <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
            <img
              src={restaurant1}
              alt="Avatar"
              class="image w-full h-full object-cover"
              style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
            />
            <div class="overlay">
              <div class="text">South Marina</div>
            </div>
          </div>
          <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
            <img
              src={restaurant2}
              alt="Avatar"
              class="image w-full h-full object-cover"
              style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
            />
            <div class="overlay">
              <div class="text">Dragonverse Mall</div>
            </div>
          </div>
          <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
            <img
              src={restaurant3}
              alt="Avatar"
              class="image w-full h-full object-cover"
              style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
            />
            <div class="overlay">
              <div class="text">Global Shopping Center</div>
            </div>
          </div>
          <div class="container w-1/2 xl:w-1/4 h-48 sm:h-64 xl:h-[500px] p-1">
            <img
              src={restaurant4}
              alt="Avatar"
              class="image w-full h-full object-cover"
              style={{ boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.4)" }}
            />
            <div class="overlay">
              <div class="text">Hig-End Hotel</div>
            </div>
          </div>
        </div>
        <div className=" text-2xl text-white text-center py-12 font-bold font-serif">
          <button onClick={()=>navigate('/reservation')} className="mb-8 w-64 md:w-96 p-6 text-white border-2 border-white rounded-xl hover:scale-105 hover:bg-zinc-900 active:scale-100 transition-all">
            Make a Reservation
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
