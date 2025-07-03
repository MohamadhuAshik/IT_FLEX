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
    name: "Angelo H. Tomlin",
    role: "Senior Manager",
    image: "https://images.pexels.com/photos/1812634/pexels-photo-1812634.jpeg",
  },
  {
    name: "Robert E. Whitmore",
    role: "Web Designer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    name: "Manuel G. Wilmer",
    role: "CEO & Founder",
    image: "https://images.pexels.com/photos/1704489/pexels-photo-1704489.jpeg",
  },
];

const TeamMembers = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-10">

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
     
          <div>
            <BellComponent content="Team Member" />
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4 leading-tight">
              Meet Our Professional <br /> Team Members
            </h2>
            <p className="text-gray-500 max-w-md">
              Sed ut perspiciatis unde omnis iste natus error sit voluptate temes
              accusantium doloremque laudantium, totam rem
            </p>
          </div>

          
          {teamData.slice(0, 2).map((member, index) => (
            <div key={index} className="text-left">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-xl w-full h-52 object-cover mb-3"
              />
              <h3 className="text-sm font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500">{member.role}</p>
              <button className="mt-2 w-7 h-7 rounded-full border border-gray-300 hover:bg-purple-100 transition text-purple-600 font-bold text-sm leading-3">
                +
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-start">
          {teamData.slice(2).map((member, index) => (
            <div key={index} className="text-left">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-xl w-full h-52 object-cover mb-3"
              />
              <h3 className="text-sm font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500">{member.role}</p>
              <button className="mt-2 w-7 h-7 rounded-full border border-gray-300 hover:bg-purple-100 transition text-purple-600 font-bold text-sm leading-3">
                +
              </button>
            </div>
          ))}

        
          <div className="flex   justify-center items-center  h-full  ">
            <button className="bg-[#5D2CFF] hover:bg-[#4b23cc] text-white font-semibold px-5 py-3 rounded-xl shadow transition whitespace-nowrap">
              View More Members
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamMembers;
