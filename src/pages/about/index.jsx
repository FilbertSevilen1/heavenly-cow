import React from "react";
import restaurant1 from "../../assets/images/restaurant/restaurant1.webp";
import restaurant2 from "../../assets/images/restaurant/restaurant2.webp";
import restaurant3 from "../../assets/images/restaurant/restaurant3.webp";
import restaurant4 from "../../assets/images/restaurant/restaurant4.webp";

function About() {
  return (
    <div className="w-full flex">
      <div className="w-full flex blackgraybg pb-16">
        <div className="w-full text-white flex flex-col items-center">
          <div
            data-aos="fade-down"
            className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white pt-12 font-bold font-serif"
          >
            About Us
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
          <div className="w-10/12 xl:w-8/12">
            <div className="font-bold font-serif text-2xl md:text-4xl">Who We Are</div>
            <div className="text-justify text-md md:text-2xl my-8">
              Heavenly Cow Restaurant is a vibrant dining destination known for
              its creative and delicious comfort food. Located in a trendy
              neighborhood, it offers a warm and welcoming atmosphere perfect
              for family gatherings, casual meals, and special celebrations. The
              menu features a diverse array of dishes, with a focus on gourmet
              burgers, artisan sandwiches, and inventive salads, all crafted
              from fresh, high-quality ingredients. With a commitment to
              exceptional service and a cozy, eclectic ambiance, Heavenly Cow
              Restaurant ensures a delightful dining experience for all its
              guests.
            </div>
            <div className="w-full flex flex-between flex-wrap flex-row">
          <div class="container w-1/2 h-48 sm:h-64 xl:h-[500px] p-1">
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
          <div class="container w-1/2 h-48 sm:h-64 xl:h-[500px] p-1">
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
          <div class="container w-1/2 h-48 sm:h-64 xl:h-[500px] p-1">
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
          <div class="container w-1/2 h-48 sm:h-64 xl:h-[500px] p-1">
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
