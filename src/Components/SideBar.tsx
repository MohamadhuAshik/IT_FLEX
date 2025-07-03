import {
  X,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  Clock,
  MapPin,
  Plus,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", hasDropdown: true },
  { label: "About" },
  { label: "Services" },
  { label: "Team" },
  { label: "Blog" },
];

const Sidebar = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div
      className={`fixed top-0 right-0 w-[320px] h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 bg-violet-600 text-white rounded-full"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center mb-6">
          <span className="bg-violet-600 p-2 rounded-full text-white mr-2">
            ▶
          </span>
          <span className="text-xl font-bold">Next</span>
        </div>
 <p className="text-gray-500 md:block hidden text-sm mb-10">
          Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat,
          a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
        </p>
        
        <div className="bg-[#0A032A] md:hidden block rounded-md overflow-hidden mb-6">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-white px-4 py-3 border-b border-white/10"
              onClick={() => item.hasDropdown && toggleDropdown(item.label)}
            >
              <span className="font-semibold">{item.label}</span>
              {item.hasDropdown && (
                <Plus size={18} className="text-white cursor-pointer" />
              )}
            </div>
          ))}
        </div>

        
        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <MapPin className="text-violet-600" size={16} />
            <span>
              <strong>Main Street, Melbourne, Australia</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Mail className="text-violet-600" size={16} />
            <span><strong>info@example.com</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="text-violet-600" size={16} />
            <span><strong>Mod–Friday, 09am –05pm</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <Phone className="text-violet-600" size={16} />
            <span><strong>+11002345909</strong></span>
          </li>
        </ul>

        
        <button className="w-full mt-6 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl text-sm font-medium">
          Contact Us
        </button>

       
        <div className="mt-6 flex gap-3 justify-center">
          {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-violet-600 hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
