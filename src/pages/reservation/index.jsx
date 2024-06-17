import React from "react";
function Reservation() {
  return (
    <div className="w-full flex">
      <div className="w-full flex blackgraybg pb-16">
        <div className="w-full text-white flex flex-col items-center">
          <div
            data-aos="fade-down"
            className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white pt-12 font-bold font-serif"
          >
            Reservation
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
          <div className="w-full md:w-10/12 xl:w-8/12">
            <div className="w-full flex flex-col md:flex-row justify-between text-2xl flex-wrap">
              <div className="w-full md:w-1/2 flex flex-col py-4 md:py-8 px-4">
                <div className="font-serif font-semibold mb-4">First Name</div>
                <input
                  className="input-reservation"
                  type="text"
                  name=""
                  id=""
                  placeholder="ex. Jack"
                ></input>
              </div>
              <div className="w-full md:w-1/2 flex flex-col py-4 md:py-8 px-4">
                <div className="font-serif font-semibold mb-4">Last Name</div>
                <input
                  className="input-reservation"
                  type="text"
                  name=""
                  id=""
                  placeholder="ex. Atlas"
                ></input>
              </div>
              <div className="w-full md:w-1/2 flex flex-col py-4 md:py-8 px-4">
                <div className="font-serif font-semibold mb-4">Seat Count</div>
                <input
                  className="input-reservation"
                  type="number"
                  name=""
                  id=""
                  placeholder="ex. 4"
                ></input>
              </div>
              <div className="w-full md:w-1/2 flex flex-col py-4 md:py-8 px-4">
                <div className="font-serif font-semibold mb-[14px]">
                  Reservation Date
                </div>
                <input
                  className="input-reservation"
                  type="date"
                  name=""
                  id=""
                ></input>
              </div>
              <div className="w-full md:w-1/2 flex flex-col py-4 md:py-8 px-4">
                <div className="font-serif font-semibold mb-[14px]">Email</div>
                <input
                  className="input-reservation"
                  type="text"
                  name=""
                  id=""
                  placeholder="ex. jack@mail.com"
                ></input>
              </div>
              <div className="w-full md:w-1/2 flex flex-col py-4 md:py-8 px-4">
                <div className="font-serif font-semibold mb-[14px]">
                  Phone Number
                </div>
                <input
                  className="input-reservation"
                  type="text"
                  name=""
                  id=""
                  placeholder="ex. 621234123412"
                ></input>
              </div>
              <div className="w-full md:w-1/2 flex flex-col py-4 md:py-8 px-4">
                <div className="font-serif font-semibold mb-[14px]">
                  Location
                </div>
                <select
                  className="input-reservation cursor-pointer"
                  type="text"
                  name=""
                  id=""
                  placeholder="ex. 621234123412"
                >
                  <option className="cursor-pointer">South Marina</option>
                  <option className="cursor-pointer">Dragonverse Mall</option>
                  <option className="cursor-pointer">Global Shopping Center</option>
                  <option className="cursor-pointer">Hig-End Hotel</option>
                </select>
              </div>
            </div>
            <div className=" text-2xl text-white text-center py-12 font-bold font-serif">
              <button className=" w-64 md:w-96 p-4 text-white border-2 border-white rounded-xl hover:scale-105 hover:bg-zinc-900 active:scale-100 transition-all">
                Make a Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reservation;
