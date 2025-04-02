import { Link } from "react-router-dom";
import MovieDropdown from "./MovieDropdown";

function ResponsiveMenu() {
  return (
    <div className="flex flex-col">
      <Link to="/">
        <p className="hover:text-red-500 text-base">Home</p>
      </Link>
      <MovieDropdown />
      <div className="relative group hover:text-red-500 hover:cursor-pointer">
        <p>TV Show</p>
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#202533] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Coming soon
        </span>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
