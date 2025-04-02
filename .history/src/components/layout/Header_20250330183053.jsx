// import { Link } from "react-router-dom";
// import MovieDropdown from "../ui/MovieDropdown";
// import SearchInput from "../ui/SearchInput";

// const Header = () => {
//   return (
//     <div className="flex fixed z-50 w-screen top-0 items-center text-white p-[24px] h-[64px] bg-black">
//       <div className="flex space-x-8 items-center ml-8">
//         <Link to="/">
//           <p className="hover:text-red-500 font-medium text-3xl">MOVIE</p>
//         </Link>
//         <Link to="/">
//           <p className="hover:text-red-500 text-base">Home</p>
//         </Link>
//         <MovieDropdown />
//         <div className="relative group hover:text-red-500 hover:cursor-pointer">
//           <p>TV Show</p>{" "}
//           <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#202533] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//             Coming soon
//           </span>
//         </div>
//       </div>
//       <SearchInput />
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";
import MovieDropdown from "../ui/MovieDropdown";
import SearchInput from "../ui/SearchInput";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed lg:justify-between z-50 w-full top-0 bg-black text-white p-4 flex items-center justify-between h-16">
      {/* Logo & Menu Button */}
      <div className="flex  space-x-8 items-center ml-8 ">
        <Link to="/" className="text-3xl font-medium hover:text-red-500">
          MOVIE
        </Link>

        {/* Hamburger Menu Button (Hidden on larger screens) */}
        <button
          className="ml-4 block lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <i className="ri-close-line"></i> // Icon đóng menu
          ) : (
            <i className="ri-menu-line"></i> // Icon mở menu
          )}
        </button>
      </div>

      {/* Navigation Links (Hidden on small screens) */}
      <div
        className={`lg:flex lg:items-center lg:space-x-8 absolute lg:static top-16 left-0 w-full bg-black lg:bg-transparent p-4 lg:p-0 transition-all ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/" className="block py-2 text-base hover:text-red-500">
          Home
        </Link>
        <MovieDropdown />
        <div className="relative group hover:text-red-500 hover:cursor-pointer block py-2">
          <p>TV Show</p>
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max bg-[#202533] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Coming soon
          </span>
        </div>
      </div>

      {/* Search Input (Always visible) */}
      <div className="ml-auto hidden lg:block">
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
