import hamburger from "../../src/assets/svgs/hamburger.svg";
import phone_call from "../../src/assets/phone-call.png";

const Navbar = () => {
  const navContent = [
    {
      routeName: "Home",
      drobDowns: [
        {
          img: "",
          content: "Home 1",
        },
        {
          img: "",
          content: "Home 2",
        },
        {
          img: "",
          content: "Home 3",
        },
        {
          img: "",
          content: "Home 4",
        },
        {
          img: "",
          content: "Home 5",
        },
        {
          img: "",
          content: "Home 6",
        },
      ],
    },
    {
      routeName: "About",
    },
    {
      routeName: "Services",
      drobDowns: [{ content: "services" }, { content: "service Details" }],
    },

    {
      routeName: "Pages",
      drobDowns: [
        {
          content: "Projects",
          drobdown: [
            {
              content: "Projects ",
            },
            {
              content: "Project Details",
            },
          ],
        },
        {
          content: "Team",
          drobdown: [
            {
              content: "Team ",
            },
            {
              content: "Team Details",
            },
          ],
        },
        {
          content: "Pricing Table",
        },
        {
          content: "404 Page",
        },
      ],
    },
    {
      routeName: "Blog",
      drobDowns: [{ content: "Blog" }, { content: "Blog Details" }],
    },
    {
      routeName: "Contact",
    },
  ];

  return (
    <div className="bg-[#151f33] p-3">
      <header className=" bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://kathbirali-next.vercel.app/assets/img/logo/white-logo.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="hidden xl:flex lg:items-center lg:justify-center lg:space-x-10">
              {navContent?.map((data, index) => (
                <div key={index}>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-1 justify-center font-rubik font-medium leading-7 text-base text-white transition-all duration-200 hover:text-blue-500"
                  >
                    {data.routeName}
                    {data.routeName === "About" ||
                    data.routeName === "Contact" ? (
                      <></>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4 text-white transition-colors duration-200 group-hover:text-blue-500"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-8">
              <div className="hidden xl:flex justify-center gap-3 items-center">
                <img src={phone_call} className="size-10" />
                <div>
                  <p className="text-white font-rubik  leading-7 ">
                    Make A Call
                  </p>
                  <p className="text-white font-rubik font-medium leading-7 ">
                    +000 (123) 456 88
                  </p>
                </div>
              </div>
              <img src={hamburger} className="size-10" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
