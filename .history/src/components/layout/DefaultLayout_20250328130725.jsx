import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.any,
};

export default DefaultLayout;
