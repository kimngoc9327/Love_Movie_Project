import { Link } from "react-router-dom";
import MovieDropdown from "./MovieDropdown";
import PropTypes from "prop-types";
import { useState } from "react";

function ResponsiveMenu({ open }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed flex flex-col w-50 space-y-4 top-16 pb-4 px-6 pt-0 bg-black text-white">
          <Link to="/">
            <p className="hover:text-red-500 text-base">Home</p>
          </Link>

          {/* Movies Dropdown */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <MovieDropdown />
            <i
              className={`text-3xl ${
                isDropdownOpen
                  ? "ri-arrow-drop-up-line"
                  : "ri-arrow-drop-down-line"
              }`}
            ></i>
          </div>

          {/* TV Show */}
          <div className="relative group hover:text-red-500 cursor-pointer">
            <p>TV Show</p>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#202533] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Coming soon
            </span>
          </div>

          {/* People */}
          <div className="relative group hover:text-red-500 hover:cursor-pointer">
            <p>People</p>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#202533] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Coming soon
            </span>
          </div>
        </div>
      )}
    </>
  );
}

ResponsiveMenu.propTypes = {
  open: PropTypes.any,
};

export default ResponsiveMenu;
