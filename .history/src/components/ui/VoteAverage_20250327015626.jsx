import PropTypes from "prop-types";

function VoteAverage({ vote }) {
  return (
    <div className="flex space-x-0.5 text-sm text-amber-400 p-0.5 bg-amber-200 rounded-sm">
      <i className="ri-star-s-fill "></i>
      <p>{vote}</p>
    </div>
  );
}

VoteAverage.propTypes = {
  vote: PropTypes.any,
};

export default VoteAverage;
