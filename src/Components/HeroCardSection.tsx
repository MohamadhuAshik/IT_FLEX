


import { ArrowUpRight } from "lucide-react";


const cards = [
  {
    id: "01",
    title: "Data Manage & Solutions Center",
    image: "https://kathbirali-next.vercel.app/assets/img/service/01.jpg",
  },
  {
    id: "02",
    title: "Preparing For Cloud Services",
    image: "https://kathbirali-next.vercel.app/assets/img/service/02.jpg",
  },
  {
    id: "03",
    title: "Machine Learning & Development",
    image: "https://kathbirali-next.vercel.app/assets/img/service/03.jpg",
  },
];


const HeroCardSection = () => {
  return (
    <div className=" py-12 px-4 md:px-10 ">
      <h2 className="text-white text-center text-lg font-semibold mb-10">
        Preparing For Your Business Success With IT Solution
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl  mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex bg-white rounded-2xl overflow-hidden p-3 shadow-md"
          >
           
            <div className="flex flex-col justify-between p-4 flex-1">
              <div>
                <span className="text-gray-500 text-sm">{card.id}</span>
                <h3 className="text-md font-semibold mt-2">{card.title}</h3>
              </div>
              <div className="mt-4 text-purple-600">
                <ArrowUpRight size={18} />
              </div>
            </div>

           
            <img
              src={card.image}
              alt={card.title}
              className="w-32 h-full object-cover rounded-tr-2xl rounded-br-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCardSection;

