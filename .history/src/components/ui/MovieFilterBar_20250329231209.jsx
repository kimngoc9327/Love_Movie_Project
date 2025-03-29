import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenreMovie } from "../../redux/actions/movieActions";
import { useNavigate } from "react-router-dom";

function MovieFilterBar() {
  const countries = [
    {
      name: "Vietnam",
      iso_3166_1: "VN",
    },
    {
      name: "South Korea",
      iso_3166_1: "KR",
    },
    {
      name: "China",
      iso_3166_1: "CN",
    },
    {
      name: "Japan",
      iso_3166_1: "JP",
    },
    {
      name: "Taiwan",
      iso_3166_1: "TW",
    },
    {
      name: "Hong Kong",
      iso_3166_1: "HK",
    },
    {
      name: "Thailand",
      iso_3166_1: "TH",
    },
    {
      name: "Indonesia",
      iso_3166_1: "ID",
    },
    {
      name: "United Kingdom",
      iso_3166_1: "GB",
    },
    {
      name: "United States",
      iso_3166_1: "US",
    },
    {
      name: "France",
      iso_3166_1: "FR",
    },
    {
      name: "India",
      iso_3166_1: "IN",
    },
  ];

  const sort_by = [
    { type: "popularity.asc", name: "Least Popular" },
    { type: "popularity.desc", name: "Most Popular" },
    { type: "primary_release_date.asc", name: "Oldest Release Date" },
    { type: "primary_release_date.desc", name: "Newest Release Date" },
    { type: "title.asc", name: "Title (A-Z)" },
    { type: "title.desc", name: "Title (Z-A)" },
    { type: "vote_average.asc", name: "Lowest Rating" },
    { type: "vote_average.desc", name: "Highest Rating" },
    { type: "vote_count.asc", name: "Fewest Votes" },
    { type: "vote_count.desc", name: "Most Votes" },
  ];

  const startYear = 1975;
  const endYear = 2025;
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genres = useSelector((state) => state.movieReducer.genres);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("");

  useEffect(() => {
    dispatch(getGenreMovie());
  }, [dispatch]);

  const handleFilter = () => {
    const params = new URLSearchParams();

    if (selectedGenre) params.append("with_genres", selectedGenre);
    if (selectedCountry) params.append("with_origin_country", selectedCountry);
    if (selectedYear) params.append("year", selectedYear);
    if (selectedSortBy) params.append("sort_by", selectedSortBy);

    navigate(`?${params.toString()}`);
  };
  return (
    <form className="flex space-x-8 justify-center text-white w-full">
      <div className="flex space-x-3 items-center">
        <label>Genre:</label>
        <select
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="border bg-gray-700 border-gray-300 rounded-md p-2"
        >
          <option className="bg-black" value="">
            All
          </option>
          {genres?.genres?.map((genre, index) => (
            <option className="bg-black" key={index} value={genre.id}>
              {" "}
              {genre.name}{" "}
            </option>
          ))}
        </select>
      </div>

      <div className="flex space-x-3 items-center">
        <label>Country:</label>
        <select
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="border bg-gray-700 border-gray-300 rounded-md p-2"
        >
          <option className="bg-black" value="">
            All
          </option>
          {countries.map((country, index) => (
            <option className="bg-black" key={index} value={country.iso_3166_1}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex space-x-3 items-center">
        <label htmlFor="">Year:</label>
        <select
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border bg-gray-700 border-gray-300 rounded-md p-2"
        >
          <option className="bg-black" value="All">
            All
          </option>
          {years.map((year, index) => (
            <option className="bg-black" key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex space-x-3 items-center">
        <label>Sort by:</label>
        <select
          onChange={(e) => setSelectedSortBy(e.target.value)}
          className="border bg-gray-700 border-gray-300 rounded-md p-2"
        >
          <option className="bg-black" value="All">
            All
          </option>
          {sort_by.map((sort, index) => (
            <option className="bg-black" key={index} value={sort.type}>
              {sort.name}
            </option>
          ))}
        </select>
      </div>

      <div
        onClick={handleFilter}
        className="flex space-x-1.5 items-center justify-center !px-3 bg-red-500 w-20 rounded-lg hover:cursor-pointer"
      >
        <p>Filter</p> <i className="ri-filter-2-fill"></i>
      </div>
    </form>
  );
}

export default MovieFilterBar;
