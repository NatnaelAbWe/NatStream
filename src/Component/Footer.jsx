import logo from "../assets/NatStream_Logo.png";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-black to-indigo-500 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <img src={logo} alt="Nat Stream logo" className="h-12 md:h-22" />

          <div className="flex gap-5">
            <SocialIcon
              className="border outline-blue-500 rounded-full hover:outline-4"
              url="www.facebook.com"
            />
            <SocialIcon
              className="border outline-blue-500 rounded-full hover:outline-4"
              url="www.x.com"
            />
            <SocialIcon
              className="border outline-blue-500 rounded-full hover:outline-4"
              url="www.instagram.com"
            />
            <SocialIcon
              className="border outline-blue-500 rounded-full hover:outline-4"
              url="www.twitch.com"
            />
          </div>

          <p className="text-sm md:text-xl font-bold max-w-xs">
            NatStream is your ultimate movie streaming platform. Discover
            movies, shows, and exclusive content anywhere, anytime.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-lg font-medium">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">Company</h3>
            <a href="#" className="hover:text-indigo-400 transition">
              About Us
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Careers
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">Support</h3>
            <a href="#" className="hover:text-indigo-400 transition">
              Help Center
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white border-opacity-20 pt-6 text-center text-sm md:text-xl">
        © {new Date().getFullYear()} NatStream. All rights reserved.
      </div>
    </footer>
  );
}
