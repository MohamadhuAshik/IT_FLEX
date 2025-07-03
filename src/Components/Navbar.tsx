import { useEffect, useState } from "react";
import hamburger from "../../src/assets/svgs/hamburger.svg";
import blackhamburger from "../../src/assets/svgs/blackhamberger.svg";
import phone_call from "../../src/assets/phone-call.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navContent = [
    { routeName: "Home" },
    { routeName: "About" },
    { routeName: "Services" },
    { routeName: "Pages" },
    { routeName: "Blog" },
    { routeName: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-[#151f33]"
        }`}
      >
        <header className="py-3 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
          
            <a href="#" className="flex-shrink-0">
              <img
                className="w-auto h-8"
                src={
                  isScrolled 
                    ? "https://kathbirali-next.vercel.app/assets/img/logo/black-logo.svg"
                    : "https://kathbirali-next.vercel.app/assets/img/logo/white-logo.svg"
                }
                alt="Logo"
              />
            </a>

          
            <div className="hidden xl:flex lg:items-center lg:space-x-10">
              {navContent.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? "text-black hover:text-violet-600"
                      : "text-white hover:text-blue-500"
                  }`}
                >
                  {item.routeName}
                </a>
              ))}
            </div>

           
            <div className="flex items-center gap-6">
              <div className="hidden xl:flex items-center gap-3">
                <img src={phone_call} className="w-10" />
                <div
                  className={`text-sm ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  <p>Make A Call</p>
                  <p className="font-semibold">+000 (123) 456 88</p>
                </div>
              </div>
              <button onClick={() => setIsSidebarOpen(true)}>
                <img src={isScrolled? blackhamburger  :hamburger } className="w-8 h-8" alt="Menu" />
              </button>
            </div>
          </div>
        </header>
      </div>

    
      <div className="h-20 xl:h-24" />

    
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
