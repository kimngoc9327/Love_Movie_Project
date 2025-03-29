import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenreMovie,
  getMovieDiscover,
} from "../../redux/actions/movieActions";
import { useNavigate } from "react-router-dom";

function MovieDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genres = useSelector((state) => state.movieReducer.genres);

  useEffect(() => {
    dispatch(getGenreMovie());
  }, [dispatch]);

  const handleGenreSelect = (genreId) => {
    dispatch(getMovieDiscover(genreId));
    navigate(`/genre?genre=${genreId}`);
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseUp={() => setIsOpen(true)}>
      <Menu>
        <MenuButton className="hover:text-red-500 text-base">Movies</MenuButton>
        {isOpen && (
          <MenuItems className="grid grid-cols-3 gap-4 absolute left-0 mt-2 w-150 p-2 origin-top-right rounded-md bg-black ring-1 z-40 focus:outline-none">
            {genres?.genres?.map((genre) => (
              <MenuItem
                id={genre.id}
                key={genre.id}
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
  );
}

export default MovieDropdown;
