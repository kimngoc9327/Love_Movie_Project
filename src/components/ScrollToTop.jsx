import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation(); // Lắng nghe cả pathname và search

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, search]); // Khi pathname hoặc search thay đổi, cuộn lên đầu

  return null;
};

export default ScrollToTop;
