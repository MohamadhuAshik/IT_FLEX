import BellComponent from "./BellComponent";

const LatestNews = () => {
  const blogPosts = [
    {
      date: "November 25, 2024",
      title: "Revealing Images With Animations Gradients, Blend Modes Cool",
      image: "https://kathbirali-next.vercel.app/assets/img/news/01.jpg",
    },
    {
      date: "November 25, 2024",
      title: "List Of 5 Ways Generating Real Time Audio Sentiment Analysis",
      image: "https://kathbirali-next.vercel.app/assets/img/news/02.jpg",
    },
    {
      date: "November 25, 2024",
      title: "Revealing Images With Animations Gradients, Blend Modes Cool",
      image: "https://kathbirali-next.vercel.app/assets/img/news/03.jpg",
    },
  ];

  return (
    <section className="px-4 py-16 bg-white text-center">
    
      <BellComponent content = "News & Blog"/>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
        Explore Our Latest News & Blog
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#f4f2ff] rounded-xl p-6 shadow-md text-left hover:shadow-lg transition duration-300"
          >
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-blue-600 font-semibold mb-4 hover:underline cursor-pointer flex items-center gap-1">
              Read More →
            </p>
            <img
              src={post.image}
              alt="Blog"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
