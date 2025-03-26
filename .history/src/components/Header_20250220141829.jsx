const Header = () => {
  return (
    <div className="flex  items-center text-white p-[8px] h-[48px] bg-black">
      <div className="flex space-x-4 items-center">
        <p className="hover:text-red-500 font-extrabold text-xl">MOVIE</p>
        <p className="hover:text-red-500 text-base">Home</p>
        <p className="hover:text-red-500  text-base">About</p>
        <p className="hover:text-red-500  text-base">Contact</p>
      </div>
      <div>
        <input className="h-[36px] " placeholder="Search" />
        <button className="bg-red">Search</button>
      </div>
    </div>
  );
};

export default Header;
