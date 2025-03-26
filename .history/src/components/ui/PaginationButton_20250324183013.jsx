import PropTypes from "prop-types";

const PaginationButton = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPages = Math.min(totalPages, 500); // Giới hạn totalPages tối đa là 500

    if (maxPages <= 6) {
      for (let i = 1; i <= maxPages; i++) pages.push(i);
    } else {
      if (currentPage > 1) pages.push(1, "...");

      // Đảm bảo không thêm trang vượt quá maxPages
      if (currentPage < maxPages - 1) {
        pages.push(currentPage);
        if (currentPage + 1 <= maxPages) pages.push(currentPage + 1);
        if (currentPage + 2 <= maxPages) pages.push(currentPage + 2);
      }

      if (currentPage < maxPages - 2) pages.push("...");

      // Luôn hiển thị trang cuối cùng
      pages.push(maxPages - 1, maxPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center space-x-2 border rounded-md px-4 py-2">
      {/* Nút Previous */}
      <button
        className={`px-3 py-2 bg-white text-gray-500 hover:cursor-pointer ${
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
          <span key={index} className="px-3 py-2 text-gray-500 ">
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`px-3 py-2 bg-white rounded-md hover:cursor-pointer ${
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
        className={`px-3 py-2 text-gray-500 hover:cursor-pointer ${
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
  currentPage: PropTypes.any,
  onPageChange: PropTypes.any,
  totalPages: PropTypes.any,
};

export default PaginationButton;
