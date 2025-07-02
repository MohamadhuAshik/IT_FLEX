import BellComponent from "./BellComponent";

const teamData = [
  {
    name: "Robert E. Whitmore",
    role: "Product Designer",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
  },
  {
    name: "Johnny M. Smith",
    role: "IT Consultant",
    image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg",
  },
  {
    name: "Mark Johnson",
    role: "Software Engineer",
    image: "https://images.pexels.com/photos/1800453/pexels-photo-1800453.jpeg",
  },
  {
    name: "Daniel James",
    role: "UI/UX Expert",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    name: "Leo Andrew",
    role: "Full Stack Dev",
    image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
  },
];

const TeamMembers = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10">
         
          <BellComponent content="Team Member"/>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Professional <br /> Team Members
          </h2>
          <p className="text-gray-500 max-w-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptate temes
            accusantium doloremque laudantium, totam rem
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-xl w-full h-60 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <button className="mt-3 w-8 h-8 rounded-full border border-gray-300 hover:bg-purple-100 transition text-purple-600 font-bold text-xl leading-3">
                +
              </button>
            </div>
          ))}
        </div>

       
        <div className="mt-10 text-center">
          <button className="bg-[#5D2CFF] hover:bg-[#4b23cc] text-white font-semibold px-6 py-3 rounded-xl shadow transition">
            View More Members
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
