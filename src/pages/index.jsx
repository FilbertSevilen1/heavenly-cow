import React from "react";
import background from "../assets/images/background/background.webp";
function Home() {
  return (
    <div className="w-full">
      <img
        src={background}
        className="object-cover min-h-[512px] md:w-full brightness-75"
      ></img>
      <div className="w-full absolute top-1/2 bottom-1/2 text-white text-center mt-36 md:mt-72">
        <div className="w-10/12 xl:w-[1024px] mx-auto font-bold drop-shadow-2xl shadow-black text-4xl md:text-6xl xl:text-8xl">Made From The Best Cow in the World</div>
      </div>
    </div>
  );
}
export default Home;
