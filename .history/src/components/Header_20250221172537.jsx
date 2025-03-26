const Header = () => {
  return (
    <div className="flex  items-center text-white p-[24px] h-[64px] bg-black">
      <div className="flex space-x-6 items-center">
        <p className="hover:text-red-500 font-extrabold text-xl">MOVIE</p>
        <p className="hover:text-red-500 text-base">Home</p>
        <p className="hover:text-red-500  text-base">About</p>
        <p className="hover:text-red-500  text-base">Contact</p>
      </div>
      <div className="ml-auto flex items-center space-x-2">
        <input
          className="h-[36px] text-black pl-[8px] bg-white rounded-md "
          placeholder="Search"
        />
        <button className="bg-red-500 pl-[6px] pr-[6px] h-[32px] text-center rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
