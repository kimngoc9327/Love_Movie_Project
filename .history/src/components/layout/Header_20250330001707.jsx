import { Link } from "react-router-dom";
import MovieDropdown from "../ui/MovieDropdown";
import SearchInput from "../ui/SearchInput";

const Header = () => {
  return (
    <div className="flex fixed z-50 w-screen top-0 items-center text-white p-[24px] h-[64px] bg-black">
      <div className="flex space-x-8 items-center ml-8">
        <Link to="/">
          <p className="hover:text-red-500 font-medium text-3xl">MOVIE</p>
        </Link>
        <Link to="/">
          <p className="hover:text-red-500 text-base">Home</p>
        </Link>
        <MovieDropdown />
        <div className="relative group">
          <p>TV Show</p>{" "}
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#202533] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Coming soon
          </span>
        </div>
      </div>
      <SearchInput />
    </div>
  );
};

export default Header;
