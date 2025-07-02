import { useState } from "react";
import service from "../../src/assets/service.png";
import serviceWhite from "../../src/assets/serviceWhite.png";
import BellComponent from "./BellComponent";

const PopularServices = () => {
  const popularServices = [
    {
      iconBlue: service,
      iconWhite: serviceWhite,
      content1: "Data Center and",
      content2: "Cloud Services",
      img: "https://kathbirali-next.vercel.app/assets/img/service/04.png",
    },
    {
      iconBlue: "",
      iconWhite: "",
      content1: "Web Development",
      content2: "Software Renew",
      img: "https://kathbirali-next.vercel.app/assets/img/service/05.png",
    },
    {
      iconBlue: "",
      iconWhite: "",
      content1: "IT Management",
      content2: "Machine Learning",
      img: "https://kathbirali-next.vercel.app/assets/img/service/06.png",
    },
    {
      iconBlue: "",
      iconWhite: "",
      content1: "Digital Product",
      content2: "UI/UX Design",
      img: "https://kathbirali-next.vercel.app/assets/img/service/07.png",
    },
  ];

  return (
    <div className="px-4 py-10 font-rubik bg-white text-2xl">
        <div className="text-center">

        <BellComponent content = "Popular Services"/>
        </div>
    
      <h1 className="font-rubik flex p-3 justify-center items-center text-wrap  text-5xl text-center tracking-wide font-medium">
        We Provide Best Quality Service
        <br />
        For Your Business
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {popularServices.map((data, index) => {
          const [iconSrc, setIconSrc] = useState(data.iconBlue);

          return (
            <div
              key={index}
              onMouseEnter={() => data.iconWhite && setIconSrc(data.iconWhite)}
              onMouseLeave={() => data.iconBlue && setIconSrc(data.iconBlue)}
              className={`${
                index === 1 ? "bg-[blue]" : "bg-[#edecec]"
              } group cursor-pointer p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-lg hover:bg-[blue] transition duration-300 flex flex-col gap-12`}
            >
              <div>
                {data.iconBlue && (
                  <img
                    src={iconSrc}
                    className="size-12 mx-10 mb-4 transition duration-300"
                    alt="icon"
                  />
                )}
                <p
                  className={`${
                    index === 1 ? "text-white" : "group-hover:text-white"
                  } text-center font-rubik text-xl font-medium`}
                >
                  {data.content1}
                </p>
                <p
                  className={`${
                    index === 1 ? "text-white" : "group-hover:text-white"
                  } text-center font-rubik text-xl font-medium`}
                >
                  {data.content2}
                </p>
              </div>
              <img
                src={data.img}
                alt="Service"
                className="w-full h-auto max-h-48 object-contain mb-4"
              />
              <p
                className={`${
                  index === 1 ? "text-white" : "group-hover:text-white"
                } mt-4 font-semibold cursor-pointer`}
              >
                Read More →
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularServices;
