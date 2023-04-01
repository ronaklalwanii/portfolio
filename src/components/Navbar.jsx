import { useState } from "react";

import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleActiveLink = (link, scrollX, scrollY) => {
    setActive(link);
    if (scrollX && scrollY) {
      window.scrollTo(scrollX, scrollY);
    }
  };

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 bg-primary ${styles.paddingX}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => handleActiveLink("", 0, 0)}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="flex text-white text-[18px] font-bold cursor-pointer">
            Ronak&nbsp;
            <span className="sm:block hidden">| Frontend Developer</span>{" "}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => {
            return (
              <li
                key={nav.id}
                className={`hover:text-white text-[18px] font-medium cursor-pointer ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => handleActiveLink(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            alt="menu"
            src={toggle ? menu : close}
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
          <div
            className={`p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[10px] z-10 rounded-xl ${
              toggle ? "hidden" : "flex"
            }`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((nav) => {
                return (
                  <li
                    key={nav.id}
                    className={`hover:text-white text-[16px] font-medium font-poppins cursor-pointer ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      handleActiveLink(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
