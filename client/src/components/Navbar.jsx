import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBookOpen, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  const navElements = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Sell Ur Book", path: "/admin/dashboard" },
    { name: "Shop", path: "/shop" },
  ];

  return (
    <>
      <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-10">
        <nav className={`px-4 py-4 lg:px-28 ${isSticky ? "sticky top-0 right-0 left-0 bg-slate-300" : ""}`}>
          <div className="flex justify-between items-center text-base gap-10">

            {/* logo */}

            <Link
              to="/"
              className="text-3xl font-bold text-blue-700 flex items-center gap-2"
            >
              <FaBookOpen className="inline-block" />
              {"Books"}
            </Link>

            {/* links for lg devices */}

            <ul className="md:flex space-x-12 hidden">
              {navElements.map((element, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={element.path}
                      className="text-xl  text-slate-700 flex items-center gap-2 hover:text-blue-700 uppercase"
                    >
                      {element.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* links for small devices */}

            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
                } md:hidden absolute top-16 left-0 w-full bg-blue-700 px-6`}
            >
              <ul className="flex flex-col  ">
                {navElements.map((element, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={element.path}
                        className="text-xl text-white flex items-center gap-1 uppercase my-4"
                      >
                        {element.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* btn for large devices */}

            <div className="space-x-12 hidden lg:flex items-center">
              <button>
                <FaBarsStaggered className="w-5 h-7 hover:text-blue-700" />
              </button>
            </div>

            {/* btn for small devices */}
            <div className="md:hidden">
              <button onClick={handleMenu} className="text-black">
                {isMenuOpen ? (
                  <FaXmark className="w-5 h-7 hover:text-blue-700" />
                ) : (
                  <FaBarsStaggered className="w-5 h-7 hover:text-blue-700" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
