import PropTypes from "prop-types";
import VoteAverage from "./VoteAverage";

// MovieCard component displays a movie poster with its title and rating.
function MovieCard({ title, poster, vote }) {
  return (
    <div className="relative  lg:w-[198px] lg:h-[278px] w-[160px] h-[230px] cursor-pointer overflow-hidden rounded-lg">
      {/* Movie poster image */}
      <img
        src={poster}
        alt={poster}
        className="absolute w-full h-full  object-cover transition delay-75 duration-200 ease-in-out hover:scale-115"
      />
      <div className=" absolute bottom-0 w-full h-[90px] bg-gradient-to-b from-transparent via-black/55 to-black/95">
        {/* Movie title */}
        <p className=" absolute bottom-2 left-2  text-white font-medium  ">
          {title}
        </p>
      </div>
      <div className="absolute top-1 left-1">
        {/* Movie rating */}
        <VoteAverage vote={vote} />
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.any,
  vote: PropTypes.any,
};

export default MovieCard;
