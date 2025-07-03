import React from "react";
import FormComponent from "./FormComponent";
import HeroImage from "../assets/HeroImg.png";
import client from "../assets/client.png";
import HeroCardSection from "./HeroCardSection";

const HeroSection: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        opacity: 1,
      }}
      className="w-full relative"
    >
      {/* Dark overlay */}
      <div className="absolute z-0 inset-0 bg-black bg-opacity-60"></div>

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row p-6 md:p-12 lg:p-20 gap-10">
          <div className="flex-1 flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              We Take Care <br />
              Your IT Solutions <br />
              & Provide Best <br />
              Services
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold">
                Get Started Now →
              </button>
              <button className="underline text-white font-semibold">
                View Services →
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
              <img
                src={client}
                className="w-10 h-10 object-cover rounded-full"
                alt="client logo"
              />
              <div className="text-sm sm:text-base text-white">
                Trusted by 1M+ people <br /> around the globe
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <FormComponent />
          </div>
        </div>

        {/* Cards shown above the overlay */}
        <HeroCardSection />
      </div>
    </div>
  );
};

export default HeroSection;
