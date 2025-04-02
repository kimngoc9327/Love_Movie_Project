import { Link } from "react-router-dom";
import MovieDropdown from "./MovieDropdown";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

function ResponsiveMenu({ open, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <>
      {open && (
        <div className="fixed top-12 w-screen h-screen bg-gray-700/70 left-0">
          <div
            ref={menuRef}
            className="absolute left-0 flex flex-col w-50 pb-4 px-6 pt-0 space-y-4 bg-black text-white"
          >
            <Link to="/">
              <p className="hover:text-red-500 text-base">Home</p>
            </Link>

            <MovieDropdown />

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
        </div>
      )}
    </>
  );
}

ResponsiveMenu.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ResponsiveMenu;
