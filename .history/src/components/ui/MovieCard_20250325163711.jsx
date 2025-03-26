import PropTypes from "prop-types";

function MovieCard({ title, poster }) {
  return (
    <div className="relative w-[198px] h-[278px] hover:cursor-pointer overflow-hidden rounded-lg">
      <img
        src={poster}
        alt={poster}
        className="absolute w-full h-full  object-cover transition delay-75 duration-200 ease-in-out hover:scale-115"
      />
      <div className=" absolute bottom-0 w-full h-[90px] bg-gradient-to-b from-transparent via-black/55 to-black/95">
        <p className=" absolute bottom-2 left-2  text-white font-medium  ">
          {title}
        </p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.any,
};

export default MovieCard;
