import {
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const FooterComponent = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-10 mb-10">
          <img src="https://kathbirali-next.vercel.app/assets/img/logo/white-logo.svg"/>
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            Let’s Discussed About <span className="text-violet-500">Your Projects</span>
          </h2>
          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-semibold transition"
          >
            Get Started →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
     
          <div>
            <h3 className="font-bold text-lg mb-3">About Us</h3>
            <p className="text-gray-400 mb-4">
              Sed perspiciatis unde omnis natus doloremque laudantium totae
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-full hover:bg-violet-600">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-full hover:bg-violet-600">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-full hover:bg-violet-600">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M12 2.04c-5.5 0-10 4.48-10 10 0 4.99 3.66 9.13 8.44 9.88v-7h-2.54V12h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.92h-2.33v7C18.34 21.13 22 16.99 22 12c0-5.52-4.5-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-full hover:bg-violet-600">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M12 2.2C6.5 2.2 2 6.7 2 12.2s4.5 10 10 10 10-4.5 10-10S17.5 2.2 12 2.2zm2.2 14.6l-1.7-.8c-.3-.1-.5-.2-.6-.5-.1-.3 0-.5.2-.7l.6-.6c.2-.2.3-.6.3-.9 0-1-.8-1.8-1.8-1.8-.7 0-1.3.4-1.6 1l-.1.3c-.1.3-.1.6 0 .9.1.3.3.5.6.7l1.7.8c.3.1.5.2.6.5.1.3 0 .5-.2.7l-.6.6c-.2.2-.3.6-.3.9 0 1 .8 1.8 1.8 1.8.7 0 1.3-.4 1.6-1l.1-.3c.1-.3.1-.6 0-.9-.1-.3-.3-.5-.6-.7z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Quick Link</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">Popular Services</a></li>
              <li><a href="#">Team Member</a></li>
              <li><a href="#">Privacy & Setting</a></li>
              <li><a href="#">Pricing Package</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-bold text-lg mb-3">Get In Touch</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2"><MapPin size={16} /> 55 Main Street, 2nd block, Malborne, Australia</li>
              <li className="flex items-center gap-2"><Mail size={16} /> info@example.com</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +000 (123) 456 88</li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-bold text-lg mb-3">Recent News</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <img src="https://kathbirali-next.vercel.app/assets/img/news/pp1.png" alt="news" className="rounded-full w-10 h-10" />
                <div>
                  <p className="text-xs text-violet-400">Nov 25, 2024</p>
                  <p className="font-medium">How Achieve More<br />Your Nine To Five</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <img src="https://kathbirali-next.vercel.app/assets/img/news/pp2.png" alt="news" className="rounded-full w-10 h-10" />
                <div>
                  <p className="text-xs text-violet-400">Nov 29, 2024</p>
                  <p className="font-medium">Discover A Better<br />Way Of Company.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

     
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
          <div>© 2024 All rights reserved.</div>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <a href="#">FAQs</a>
            <a href="#">Company</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
