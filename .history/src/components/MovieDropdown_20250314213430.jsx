import { Menu, MenuButton } from "@headlessui/react";

function MovieDropdown() {
  return (
    <div>
      <Menu>
        <MenuButton className="hover:text-red-500  text-base">
          Movies
        </MenuButton>
      </Menu>
    </div>
  );
}

export default MovieDropdown;
