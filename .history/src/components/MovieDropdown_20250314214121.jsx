import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

function MovieDropdown() {
  return (
    <div>
      <Menu>
        <MenuButton className="hover:text-red-500  text-base">
          Movies
        </MenuButton>
        <MenuItems transition anchor="bottom end" className="">
          <MenuItem>Action</MenuItem>
          <MenuItem>Adventure</MenuItem>
          <MenuItem>Animation</MenuItem>
          <MenuItem>Comedy</MenuItem>
          <MenuItem>Crime</MenuItem>
          <MenuItem>Documentary</MenuItem>
          <MenuItem>Drama</MenuItem>
          <MenuItem>Family</MenuItem>
          <MenuItem>Fantasy</MenuItem>
          <MenuItem>History</MenuItem>
          <MenuItem>Hornor</MenuItem>
          <MenuItem>Music</MenuItem>
          <MenuItem>Mistery</MenuItem>
          <MenuItem>Romance</MenuItem>
          <MenuItem>Science Fiction</MenuItem>
          <MenuItem>TV Movie</MenuItem>
          <MenuItem>Thriller</MenuItem>
          <MenuItem>War</MenuItem>
          <MenuItem>Western</MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default MovieDropdown;
