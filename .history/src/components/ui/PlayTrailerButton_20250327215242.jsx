import PropTypes from "prop-types";

function PlayTrailerButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex space-x-2 w-40 items-center px-3 py-1.5 bg-red-500 hover:cursor-pointer"
    >
      <i className="ri-play-large-line"></i>
      <p>PLAY TRAILER</p>
    </div>
  );
}

PlayTrailerButton.propTypes = {
  onClick: PropTypes.any,
};
export default PlayTrailerButton;
