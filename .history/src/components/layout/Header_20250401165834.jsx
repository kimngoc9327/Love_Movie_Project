import { Link } from "react-router-dom";
import MovieDropdown from "../ui/MovieDropdown";
import SearchInput from "../ui/SearchInput";

const Header = () => {
  return (
    <div className="flex fixed z-50 w-screen top-0 items-center text-white p-4 h-16 bg-black">
      {/* Logo bên trái */}
      <div className="text-xl font-bold ml-4 sm:text-2xl">
        <Link to="/" className="hover:text-red-500">
          MOVIE
        </Link>
      </div>

      {/* Menu ở giữa - Ẩn trên màn hình nhỏ */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link to="/" className="hover:text-red-500 text-base">
          Home
        </Link>
        <MovieDropdown />
        <div className="relative group hover:text-red-500 hover:cursor-pointer">
          <p>TV Show</p>
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#202533] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Coming soon
          </span>
        </div>
      </div>

      {/* Thanh tìm kiếm bên phải */}
      <div className="ml-auto mr-4">
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
