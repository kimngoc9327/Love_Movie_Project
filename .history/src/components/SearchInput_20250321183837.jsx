function SearchInput() {
  return (
    <div className="ml-auto mr-8  flex items-center space-x-3">
      <input
        className="h-[36px] w-90 text-black pl-[10px] bg-white rounded-md "
        placeholder="Search"
      />
      <button className="bg-red-500 py-[6px] px-[7px] h-[32px] text-center rounded-md">
        Search
      </button>
    </div>
  );
}

export default SearchInput;
