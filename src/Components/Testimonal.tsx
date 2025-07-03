import React, { useEffect, useState } from "react";

const testimonials = [
  {
    text: "We denounce with right indignation dislike men who are so beguile and demoralized by the charms of pleasure of the moment, so blinded by desire cannot foresee",
    name: "Lucas J. Swe",
    role: "CO Founder",
    avatar:
      "https://kathbirali-next.vercel.app/assets/img/testimonial/testimonial.png",
    companyLogo:
      "https://kathbirali-next.vercel.app/assets/img/testimonial/client.png",
  },
  {
    text: "We denounce with right indignation dislike men who are so beguile and demoralized by the charms of pleasure of the moment, so blinded by desire cannot foresee",
    name: "Lucas J. Swe",
    role: "CO Founder",
    avatar:
      "https://kathbirali-next.vercel.app/assets/img/testimonial/testimonial.png",
    companyLogo:
      "https://kathbirali-next.vercel.app/assets/img/testimonial/client.png",
  },
  {
    text: "We denounce with right indignation dislike men who are so beguile and demoralized by the charms of pleasure of the moment, so blinded by desire cannot foresee",
    name: "Lucas J. Swe ",
    role: "CO Founder",
    avatar:
      "https://kathbirali-next.vercel.app/assets/img/testimonial/testimonial.png",
    companyLogo:
      "https://kathbirali-next.vercel.app/assets/img/testimonial/client.png",
  },
];

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [total]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Avatar */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 p-1">
          <img
            src={testimonials[current].avatar}
            alt="Avatar"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </div>

        {/* Testimonial Content */}
        <div className="flex-1 max-w-xl">
          <p className="text-gray-700 text-sm md:text-base mb-4">
            {testimonials[current].text}
          </p>

          <div className="flex items-center justify-between">
            {/* Name + Dots */}
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[current].avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-sm">
                  <p className="font-semibold">{testimonials[current].name}</p>
                  <p className="text-xs text-gray-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex ms-2 items-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === current ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Company Logo */}
            <img
              src={testimonials[current].companyLogo}
              alt="Logo"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
