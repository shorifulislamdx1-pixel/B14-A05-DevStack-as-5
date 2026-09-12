import { useState } from "react";
import Logo from "../assets/logo-text.png";
import Hamburger from "../assets/hamburger.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">

      <div className="container mx-auto px-4 py-4">

        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center">

          <img
            src={Logo}
            alt="Dev Stack"
            className="w-32"
          />

          <ul className="flex gap-6 items-center text-sm text-gray-600">
            <li className="text-pink-600">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="flex gap-4 items-center">
            <button className="text-sm text-gray-600">
              Sign In
            </button>

            <button className="rounded-full bg-pink-600 px-5 py-2 text-sm font-medium text-white">
              Sign Up
            </button>
          </div>

        </div>


        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between">

          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              src={Hamburger}
              alt="Menu"
              className="w-5 h-5"
            />
          </button>

          <img
            src={Logo}
            alt="Dev Stack"
            className="w-24"
          />

          <button className="rounded-full bg-pink-600 px-4 py-2 text-xs font-medium text-white">
            Sign Up
          </button>

        </div>


        {/* Mobile Menu */}
        {isOpen && (
          <ul className="mt-4 space-y-4 border-t border-gray-100 pt-4 text-sm text-gray-600 md:hidden">

            <li className="text-pink-600">
              Home
            </li>

            <li>
              Technologies
            </li>

            <li>
              Projects
            </li>

            <li>
              About
            </li>

            <li>
              Contact
            </li>

            <li>
              Sign In
            </li>

          </ul>
        )}

      </div>

    </nav>
  );
};

export default Nav;