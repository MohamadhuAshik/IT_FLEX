import BellComponent from "./BellComponent";

const CompanyStats = () => {
  const stats = [
    {
      value: "98%",
      title: "Average Conversion Rate",
      description: "Sed perspiciatis unde omnis este natus sit volupta",
      bgColor: "bg-[#F3F0FF]",
    },
    {
      value: "35m+",
      title: "Traffic Generated",
      description: "Sed perspiciatis unde omnis este natus sit volupta",
      bgColor: "bg-[#5D2CFF]",
      textWhite: true,
    },
    {
      value: "97%",
      title: "Positive Customer Review",
      description: "Sed perspiciatis unde omnis este natus sit volupta",
      bgColor: "bg-[#F3F0FF]",
    },
    {
      value: "92%",
      title: "Professional Team Members",
      description: "Sed perspiciatis unde omnis este natus sit volupta",
      bgColor: "bg-[#F3F0FF]",
    },
  ];

  return (
    <section className="px-4 py-16 bg-white text-center">
     
     
  <BellComponent content = "Company Fun Fact"/>
       <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
        Learn Our Company Statistics
      </h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-8 shadow-sm ${item.bgColor} ${
              item.textWhite ? "text-white" : "text-gray-900"
            }`}
          >
            <h3 className="text-4xl font-extrabold mb-2">{item.value}</h3>
            <p className="text-base font-medium mb-2">{item.title}</p>
            <div
              className={`border-t-2 ${
                item.textWhite ? "border-white" : "border-dotted border-gray-600"
              } w-3/4 mx-auto my-3`}
            ></div>
            <p className={`text-sm ${item.textWhite ? "text-white/80" : "text-gray-600"}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStats;
