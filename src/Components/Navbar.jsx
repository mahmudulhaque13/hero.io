import React from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#9F62F2] font-bold"
      : "hover:text-[#9F62F2]";

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* MOBILE */}
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/apps" className={isActive("/apps")}>
                Apps
              </Link>
            </li>
            <li>
              <Link to="/installation" className={isActive("/installation")}>
                Installation
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl text-[#9F62F2]">
          HERO.IO
        </Link>
      </div>

      {/* DESKTOP */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/apps" className={isActive("/apps")}>
              Apps
            </Link>
          </li>
          <li>
            <Link to="/installation" className={isActive("/installation")}>
              Installation
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        <a
          href="https://github.com/mahmudulhaque13"
          target="_blank"
          rel="noreferrer"
          className="btn text-white bg-[#9F62F2] flex items-center gap-2"
        >
          <img
            className="h-6"
            src="https://img.icons8.com/sf-black-filled/64/github.png"
            alt="github"
          />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
