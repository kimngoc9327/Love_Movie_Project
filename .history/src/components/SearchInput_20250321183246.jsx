function SearchInput() {
  return (
    <div className="ml-auto w-48 flex items-center space-x-2">
      <input
        className="h-[36px] text-black pl-[8px] bg-white rounded-md "
        placeholder="Search"
      />
      <button className="bg-red-500 pl-[6px] pr-[6px] h-[32px] text-center rounded-md">
        Search
      </button>
    </div>
  );
}

export default SearchInput;
