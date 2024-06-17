import React, { useState } from "react";

import event1 from "../../assets/images/food/ribeye.webp";
import event2 from "../../assets/images/event/event2.webp";
import event3 from "../../assets/images/logo/logo.webp";
import event4 from "../../assets/images/food/sirloin.webp";
import event5 from "../../assets/images/food/Wagyu A5.webp";
import event6 from "../../assets/images/food/tenderloin.webp";

function EventCard({ image, title, description, date }) {
  return (
    <div className="w-full md:w-1/2 xl:w-96 h-[500px] cursor-pointer transition-all hover:scale-105">
      <div className="w-full h-48">
        <img src={image} className="w-full h-full object-cover"></img>
      </div>
      <div className="w-full flex">
        <div className=" h-28 border-l-2 border-l-[#ffa200] my-4 pr-4"></div>
        <div className="flex flex-col">
          <div className="text-3xl font-bold font-serif my-4 mr-2 delimiter-2">{title}</div>
          <div className="text-md md:text-lg xl:text-xl font-serif text-justify mr-4 mb-4 ">{date}</div>
          <div className="text-md md:text-lg xl:text-xl font-serif text-justify mr-4 delimiter-4">{description}</div>
        </div>
      </div>
    </div>
  );
}

function Event() {
  const [event, setEvent] = useState([
    {
      image: event1,
      title: "Short Sale Event",
      description:
        "Join us for an exclusive Short Sale Event, where you'll find incredible discounts on a wide selection of premium items! Whether you're looking for fashion, electronics, home goods, or unique gifts, this event offers unbeatable deals you won't want to miss. Enjoy a stress-free shopping experience with limited-time offers, special promotions, and a friendly atmosphere. Hurry in and grab your favorites before they're gone!",
      date: "August 21, 2024",
    },
    {
      image: event2,
      title: "Extravagant Omega Beef Festival",
      description:
        "The Extravagant Omega Beef Festival is a culinary celebration dedicated to showcasing the finest cuts of Omega beef. This annual event features a variety of gourmet dishes prepared by renowned chefs, cooking demonstrations, and interactive workshops. Attendees can indulge in a rich array of flavors, from traditional steaks to innovative beef creations, all while enjoying live entertainment and a vibrant atmosphere. Perfect for food enthusiasts and meat lovers, the festival promises an unforgettable gastronomic experience.",
      date: "June 28, 2024",
    },
    {
      image: event3,
      title: "1st Anniversary Heavenly Cow",
      description:
        "Join us on July 21, 2024, as we celebrate the 1st anniversary of Heavenly Cow! Marking a year of serving delicious comfort food and creating memorable dining experiences, this special event will feature exclusive menu items, exciting giveaways, live music, and fun activities for all ages. Come and be a part of our joyous celebration, and enjoy a delightful day filled with great food, entertainment, and community spirit. Don’t miss this milestone event at Heavenly Cow!",
      date: "July 21, 2024",
    },
    {
      image: event4,
      title: "All You Can Eat 50k!",
      description:
        "Indulge in our All You Can Eat extravaganza for just 50k! Enjoy an unlimited feast of your favorite dishes, from savory starters to delectable desserts. Perfect for food lovers, this special offer provides an unbeatable dining experience at an incredible value. Bring your friends and family, and treat yourselves to a culinary adventure you won't forget. Don't miss out on this amazing deal—come hungry and leave happy!",
      date: "June 15, 2024",
    },
    {
      image: event5,
      title: "Sigma Beef Festival",
      description:
        "Experience the culinary excellence at the Sigma Beef Festival, a celebration dedicated to the finest beef creations. This annual event brings together top chefs and food enthusiasts to enjoy a diverse array of beef dishes, from classic cuts to innovative recipes. With cooking demonstrations, tasting sessions, and live entertainment, the festival offers a perfect blend of gastronomy and fun. Join us for a day of flavor-packed indulgence and discover the ultimate beef experience at the Sigma Beef Festival.",
      date: "August 7, 2024",
    },
    {
      image: event6,
      title: "Tenderloin Festival",
      description:
        "Welcome to the Tenderloin Festival, where succulent flavors and culinary creativity converge! This festival is a haven for tenderloin enthusiasts, featuring a tantalizing array of dishes highlighting this premium cut of meat. From classic preparations to inventive culinary twists, each dish promises a melt-in-your-mouth experience. Join us for a celebration of exquisite flavors, culinary craftsmanship, and a feast you won't want to miss. Whether you're a connoisseur or simply love great food, the Tenderloin Festival invites you to savor every bite and indulge in the best of tenderloin cuisine.",
      date: "July 30, 2024",
    },
  ]);

  const generateEventData = () => {
    if (event) {
      return event.map((item, index) => {
        return (
          <EventCard
            image={item.image}
            title={item.title}
            description={item.description}
            date={item.date}
          ></EventCard>
        );
      });
    }
  };
  return (
    <div className="w-full flex">
      <div className="w-full flex blackgraybg pb-16">
        <div className="w-full text-white flex flex-col items-center">
          <div
            data-aos="fade-down"
            className="text-center md:text-left mt-8 text-3xl md:text-4xl xl:text-6xl text-white pt-12 font-bold font-serif"
          >
            Events
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
          <div data-aos="fade-down" className="w-8/12 flex flex-wrap justify-between gap-y-8">{generateEventData()}</div>
        </div>
      </div>
    </div>
  );
}
export default Event;
