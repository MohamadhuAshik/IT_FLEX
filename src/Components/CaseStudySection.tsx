import { ArrowUpRight } from "lucide-react";
import BellComponent from "./BellComponent";

const CaseStudySection = () => {
  const caseStudies = [
    {
      category: "IT Consulting",
      title: "How To Achieve More With Your Nine To Five",
      image:
        "https://kathbirali-next.vercel.app/assets/img/case-study/01.jpg",
    },
    {
      category: "Machine Learning",
      title: "Strategies For Outstanding Future Results",
      image:
        "https://kathbirali-next.vercel.app/assets/img/case-study/02.jpg",
    },
    {
      category: "Software Design",
      title: "Discover A Better Way Of System Defining Company Goals.",
      image:
        "https://kathbirali-next.vercel.app/assets/img/case-study/03.jpg",
    },
  ];

  return (
    <section className="bg-[#6C63FF] text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div className="max-w-2xl">
            <BellComponent content="Popular Case Study" />
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              Discover Our Popular Case Study That We Globally Completes
            </h2>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-700 font-semibold transition">
            View More Cases
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-medium text-purple-700 mb-2">
                  {study.category}
                </p>
                <h3 className="text-lg font-semibold leading-tight mb-4">
                  {study.title}
                </h3>
                <ArrowUpRight size={20} className="text-purple-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-900/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
    </section>
  );
};

export default CaseStudySection;
