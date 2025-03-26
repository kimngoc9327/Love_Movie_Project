import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useState } from "react";

function MovieDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const genre = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  return (
    <div className="relative" onMouseUp={() => setIsOpen(true)}>
      <Menu>
        <MenuButton className="hover:text-red-500 text-base">Movies</MenuButton>
        {isOpen && (
          <MenuItems className="grid grid-cols-3 gap-4 absolute left-0 mt-2 w-150 p-2 origin-top-right rounded-md bg-black shadow-lg shadow-amber-50 z-40 focus:outline-none">
            {genre.map((genre) => (
              <MenuItem
                key={genre.id}
                as="div"
                className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
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
