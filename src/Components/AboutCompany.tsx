import BellComponent from "./BellComponent";

const AboutCompany = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Images */}
        <div className="flex justify-center gap-4 relative">
          <div className="rounded-xl overflow-hidden w-[200px] sm:w-[250px] mt-10">
            <img
              src="http://kathbirali-next.vercel.app/assets/img/about/01.jpg"
              alt="team1"
              className="w-full  object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden w-[200px] sm:w-[250px] ">
            <img
              src="https://kathbirali-next.vercel.app/assets/img/about/02.jpg"
              alt="team2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Slanted Tag */}
          <div className="absolute w-[450px] bottom-4 left-1/2 -translate-x-1/2 rotate-[-10deg] bg-[#5D2CFF] text-white px-8 py-2 text-sm font-semibold rounded-lg shadow-lg flex justify-center items-center  gap-4">
            <span>25+ Years Of Experience</span>
            <span className="flex items-center gap-1">
              <span className="text-white">⭐</span> Awards Winning Company
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div>
          {/* Tag */}
       
          <BellComponent content="About Company"/>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Preparing Your Success <br /> Trusted IT Services
          </h2>
          <p className="text-gray-500 mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptate
            temes accusantium doloremque laudantium, totam rem
          </p>

          {/* List Points */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✔</span>
              <p>Connect with leads with zero hassle.</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✔</span>
              <p>Take quick payments direct from meetings</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✔</span>
              <p>Start finding leads that get coverts quickly</p>
            </li>
          </ul>

          {/* CTA + Founder */}
          <div className="flex items-center gap-6 flex-wrap">
            <button className="bg-[#5D2CFF] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-[#4b23cc] transition">
              Learn More Us →
            </button>
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Founder"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p>
                <span className="font-bold">Lucas J. Swe</span>{" "}
                <span className="text-gray-500">/ CO Founder</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
