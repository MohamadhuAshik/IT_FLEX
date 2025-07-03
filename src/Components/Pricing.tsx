const Pricing = () => {
  const plans = [
    {
      name: "Regular Plan",
      price: "$19",
      features: [
        { text: "IT Consulting", available: true },
        { text: "Digital Product Design", available: true },
        { text: "Machine Learning", available: true },
        { text: "Automation templates", available: false },
        { text: "Great Customer Support", available: false },
      ],
      highlight: false,
    },
    {
      name: "Business Plan",
      price: "$53",
      features: [
        { text: "IT Consulting", available: true },
        { text: "Digital Product Design", available: true },
        { text: "Machine Learning", available: true },
        { text: "Automation templates", available: true },
        { text: "Great Customer Support", available: true },
      ],
      highlight: true,
    },
    {
      name: "Professional Plan",
      price: "$99",
      features: [
        { text: "IT Consulting", available: true },
        { text: "Digital Product Design", available: true },
        { text: "Machine Learning", available: true },
        { text: "Automation templates", available: false },
        { text: "Great Customer Support", available: false },
      ],
      highlight: false,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-700 font-medium px-3 py-1 rounded-full text-sm mb-4">
            🔔 Pricing Package
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Popular Pricing For IT Consulting
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 border ${
                plan.highlight
                  ? "bg-gray-900 text-white"
                  : "bg-indigo-50 text-gray-900"
              }`}
            >
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm mb-6">For Small Businesses</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((item, i) => (
                  <li
                    key={i}
                    className={`text-sm font-medium ${
                      item.available
                        ? plan.highlight
                          ? "text-white"
                          : "text-gray-900"
                        : "text-gray-400 line-through"
                    }`}
                  >
                    • {item.text}
                  </li>
                ))}
              </ul>

              <p className="text-3xl font-bold mb-2">{plan.price}
                <span className="text-base font-normal"> /Month</span>
              </p>
              <p className="text-sm mb-6">For Small Businesses</p>

              <button
                className={`w-full py-3 rounded-md font-semibold transition ${
                  plan.highlight
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-900 border"
                }`}
              >
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
