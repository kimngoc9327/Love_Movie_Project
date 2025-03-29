import PropTypes from "prop-types";

function VoteAverage({ vote }) {
  return (
    <div className="flex space-x-0.5 items-center text-sm text-amber-400 px-1 bg-gray-700 rounded-[2px]">
      <i className="ri-star-s-fill "></i>
      <p>{vote}</p>
    </div>
  );
}

VoteAverage.propTypes = {
  vote: PropTypes.any,
};

export default VoteAverage;
