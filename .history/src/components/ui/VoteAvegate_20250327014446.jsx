import PropTypes from "prop-types";

function VoteAvegate({ vote }) {
  return (
    <div className="flex space-x-0.5 text-amber-400 p-1 bg-amber-200 rounded-xl">
      <i className="ri-star-s-fill "></i>
      <p>{vote}</p>
    </div>
  );
}

VoteAvegate.propTypes = {
  vote: PropTypes.any,
};

export default VoteAvegate;
