import PropTypes from "prop-types";

function VoteAvegate({ vote }) {
  return (
    <div className="flex space-x-0.5 text-amber-400">
      <i className="ri-star-s-fill text-amber-400"></i>
      <p>{vote}</p>
    </div>
  );
}

VoteAvegate.propTypes = {
  vote: PropTypes.any,
};

export default VoteAvegate;
