import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import PropTypes from "prop-types";

function Navigation({ id }) {
  Navigation.propTypes = {
    id: PropTypes.any.isRequired,
  };
  return (
    <>
      <nav className="bg-gray-950 text-white min-h-14 w-full flex items-center justify-between">
        <Link
          className="p-4 hover:bg-slate-800 hover:text-white hover:py-4 text-white"
          to="/"
        >
          Home
        </Link>
        <div className="cursor-pointer overflow-none">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-14" />
          </Link>
        </div>
        <Link
          className="p-4 hover:bg-slate-800 hover:text-white text-white hover:py-4"
          to={`/Dashboard/${id}`}
        >
          Dashboard
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
