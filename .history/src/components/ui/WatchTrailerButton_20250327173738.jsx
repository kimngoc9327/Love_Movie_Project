import PropTypes from "prop-types";

function WatchTrailerButton({ watch }) {
  return (
    <div
      onClick={watch}
      className="flex space-x-2 w-50 items-center px-3 py-1.5 bg-red-500"
    >
      <i className="ri-play-large-line"></i>
      <p>WATCHING TRAILER</p>
    </div>
  );
}

WatchTrailerButton.propTypes = {
  watch: PropTypes.any,
};
export default WatchTrailerButton;
