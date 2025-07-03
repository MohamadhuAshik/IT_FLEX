import { useState } from "react";
import hamburger from "../../src/assets/svgs/hamburger.svg";
import phone_call from "../../src/assets/phone-call.png";
import Sidebar from "./Sidebar"; // Create this next

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navContent = [
    { routeName: "Home" }, { routeName: "About" }, { routeName: "Services" },
    { routeName: "Pages" }, { routeName: "Blog" }, { routeName: "Contact" },
  ];

  return (
    <>
      <div className="bg-[#151f33] p-3">
        <header className="bg-opacity-30">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" className="flex">
                  <img
                    className="w-auto h-8"
                    src="https://kathbirali-next.vercel.app/assets/img/logo/white-logo.svg"
                    alt="Logo"
                  />
                </a>
              </div>

              <div className="hidden xl:flex lg:items-center lg:space-x-10">
                {navContent.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-white hover:text-blue-500 font-medium"
                  >
                    {item.routeName}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div className="hidden xl:flex items-center gap-3">
                  <img src={phone_call} className="w-10" />
                  <div className="text-white text-sm">
                    <p>Make A Call</p>
                    <p className="font-semibold">+000 (123) 456 88</p>
                  </div>
                </div>
                <button onClick={() => setIsSidebarOpen(true)}>
                  <img src={hamburger} className="w-8 h-8" alt="Menu" />
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
