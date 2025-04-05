import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenreMovie,
  getMovieDiscover,
} from "../../redux/actions/movieActions";
import { useNavigate, useLocation } from "react-router-dom";

function MovieDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const genres = useSelector((state) => state.movieReducer.genres);

  useEffect(() => {
    dispatch(getGenreMovie());
  }, [dispatch]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleGenreSelect = (genreId) => {
    dispatch(getMovieDiscover(genreId));
    navigate(`/filter?with_genres=${genreId}`);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop */}
      <div className="relative mb-13px max-md:hidden">
        <Menu>
          <MenuButton
            className="flex items-center justify-between hover:text-red-500 text-base cursor-pointer max-lg:w-full"
            onMouseUp={() => setIsOpen(true)}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <p>Movies</p>
          </MenuButton>

          {isOpen && (
            <MenuItems className="grid grid-cols-3 gap-4 absolute left-0 mt-2 w-150 p-2 origin-top-right rounded-md bg-black ring-1 z-40 focus:outline-none max-lg:grid-cols-2 max-lg:w-76 max-lg:gap-1 max-lg:py-0">
              {genres?.genres?.map((genre, index) => (
                <MenuItem
                  key={index}
                  as="div"
                  className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleGenreSelect(genre.id)}
                >
                  {genre.name}
                </MenuItem>
              ))}
            </MenuItems>
          )}
        </Menu>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div
          className="flex items-center px-4 justify-between hover:text-red-500 text-base cursor-pointer max-lg:w-full"
          onClick={toggleDropdown}
        >
          <p>Movies</p>
          <i
            className={`text-3xl pt-1 ${
              isOpen ? "ri-arrow-up-s-fill" : "ri-arrow-down-s-fill"
            }`}
          ></i>
        </div>

        {isOpen && (
          <div className="bg-[#141519] px-0 max-h-[300px] overflow-y-auto">
            {genres?.genres?.map((genre, index) => (
              <p
                key={index}
                className="px-8 py-2 text-white hover:bg-gray-700 cursor-pointer"
                onClick={() => handleGenreSelect(genre.id)}
              >
                {genre.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MovieDropdown;
