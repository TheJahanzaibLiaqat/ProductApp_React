import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { link: "Home", Path: "/" },
    { link: "Services", Path: "services" },
    { link: "About", Path: "about" },
    { link: "Product", Path: "product" },
    { link: "Contact Us", Path: "contactUs" },
    { link: "FaQ", Path: "faq" },
  ];
  return (
    <header className="bg-gray-400">
      <nav className="flex items-center justify-between mx-10 ">
        <div className="flex items-center">
          <a href="/">
            <img src={Logo} alt="logo" className="w-20 h-20" />
          </a>
          <a href="" className="font-bold text-2xl">
            LOGOS
          </a>
        </div>
        <div>
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden"
          >
            {open ? (
              <IoCloseSharp className="w-8 h-8" />
            ) : (
              <IoIosMenu className="w-8 h-8" />
            )}
          </div>

          <ul className="space-x-5 hidden md:block text-md text-gray-700 ">
            {navItems.map(({ link, Path }) => (
              <Link
                to={Path}
                key={Path}
                className="hover:text-gray-700 hover:uppercase hover:underline"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <div className="space-x-2 lg:block hidden">
          <a href="/">
            <button className="bg-green-800 hover:bg-green-900 text-white rounded-md p-3">
              Login
            </button>
          </a>
          <a href="">
            <button className="text-black rounded-md p-3 hover:border hover:bg-black hover:text-white">
              Sign Up
            </button>
          </a>
        </div>

        {/* responsive items */}
      </nav>

      <ul
        className={`space-y-5 md:hidden z-[1] bg-green-900 text-white flex flex-col text-xl mt-1 ps-5 py-4 transition-all duration-300 ease-in absolute w-full ${
          open ? "-left-0" : "-left-full"
        }`}
      >
        {navItems.map(({ link, Path }) => (
          <Link to={Path} key={Path} className="hover:underline">
            {link}
          </Link>
        ))}
      </ul>
    </header>
  );
}
