import PropTypes from "prop-types";

function PlayTrailerButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex space-x-2 w-38 justify-center items-center px-3 py-1 bg-red-500 cursor-pointer max-md:text-sm"
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
