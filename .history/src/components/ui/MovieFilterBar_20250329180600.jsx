import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenreMovie } from "../../redux/actions/movieActions";

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

  const startYear = 1975;
  const endYear = 2025;
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  );

  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movieReducer.genres);

  useEffect(() => {
    dispatch(getGenreMovie());
  }, [dispatch]);
  return (
    <div className="flex space-x-8 text-white w-full">
      <div className="flex space-x-3">
        <label>Genre:</label>
        <select className="border border-gray-300 rounded-md p-2">
          {genres?.genres?.map((genre, index) => (
            <option key={index}> {genre.name} </option>
          ))}
        </select>
      </div>

      <div>
        <label>Country:</label>
        <select name="" id="" className="border border-gray-300 rounded-md p-2">
          {countries.map((country, index) => (
            <option key={index} value={country.iso_3166_1}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        {" "}
        <label htmlFor="">Year:</label>
        <select className="border border-gray-300 rounded-md p-2">
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default MovieFilterBar;
