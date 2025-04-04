import { Link } from "react-router-dom";
import MovieDropdown from "../ui/MovieDropdown";
import SearchInput from "../ui/SearchInput";
import { useState } from "react";
import ResponsiveMenu from "../ui/ResponsiveMenu";

// Header component displays a navigation bar with links, search input, and dropdown menu.
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearchInput, setIsOpenSearchInput] = useState(false);

  return (
    <div className="flex fixed z-50 w-screen top-0 left-0 right-0 items-center text-white p-6 h-16 bg-black max-lg:justify-between max-lg:pl-0 max-lg:p-3 max-lg:h-12">
      <div className="flex space-x-8  items-center ml-8 max-lg:justify-between max-lg:w-full">
        <div onClick={() => setIsOpenMenu(true)} className="md:hidden">
          <i className="ri-menu-line"></i>
        </div>
        <Link to="/">
          <p className="hover:text-red-500 font-medium text-3xl max-lg:text-xl">
            MOVIE
          </p>
        </Link>
        <div className="max-md:hidden flex space-x-8 items-center">
          <Link to="/">
            <p className="hover:text-red-500 text-base">Home</p>
          </Link>
          <MovieDropdown />
          <div className="relative group hover:text-red-500 cursor-pointer">
            <p>TV Show</p>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#202533] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Coming soon
            </span>
          </div>
          <div className="relative group hover:text-red-500 cursor-pointer my-2">
            <p>People</p>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#202533] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Coming soon
            </span>
          </div>
        </div>
        <div
          onClick={() => setIsOpenSearchInput(true)}
          className="md:hidden mr-6"
        >
          <i className="ri-search-line text-white"></i>
        </div>
      </div>
      <SearchInput
        open={isOpenSearchInput}
        onClose={() => setIsOpenSearchInput(false)}
      />
      <ResponsiveMenu open={isOpenMenu} onClose={() => setIsOpenMenu(false)} />
    </div>
  );
};

export default Header;
