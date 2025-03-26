import PropTypes from "prop-types";

const PaginationButton = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages > 500) {
      totalPages = 500;
      if (totalPages <= 6) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {
        if (currentPage >= 0) pages.push(1, 2, 3, "...");
        for (
          let i = Math.max(3, currentPage - 1);
          i <= Math.min(totalPages - 2, currentPage + 1);
          i++
        ) {
          pages.push(i);
        }
        if (currentPage < totalPages - 2)
          pages.push("...", totalPages - 1, totalPages);
      }
      return pages;
    }
  };

  return (
    <div className="flex items-center space-x-2 border rounded-md px-4 py-2">
      {/* Nút Previous */}
      <button
        className={`px-3 py-2 bg-white text-gray-500 ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ❮
      </button>

      {/* Các số trang */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`px-3 py-2 bg-white rounded-md ${
              currentPage === page
                ? "!bg-indigo-600 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}

      {/* Nút Next */}
      <button
        className={`px-3 py-2 text-gray-500 ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ❯
      </button>
    </div>
  );
};

PaginationButton.propTypes = {
  currentPage: PropTypes.number,
  onPageChange: PropTypes.number,
  totalPages: PropTypes.number,
};

export default PaginationButton;
