import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Endpoint({ id }) {
  Endpoint.propTypes = {
    id: PropTypes.any.isRequired,
  };
  return (
    <div className="bg-gray-950 text-center text-white w-full p-5 pb-8">
      <div>
        Your REST endpoint is ready to make GET, POST, PUT and DELETE requests
      </div>
      <div className="overflow-x-auto bg-blue-100 text-black border border-black rounded-md mt-2 p-4 mb-5 sm:mx-4 md:mx-[16vw] text-md">
        https://stack-craft.vercel.app/{id}
      </div>
      <Link
        className="hover:text-white bg-sky-600 text-white border border-black rounded-md pb-3 pt-2 px-5 text-sm md:text-md lg:text-md xl:text-md"
        to={`/Dashboard/${id}`}
      >
        Check Endpoint Information
      </Link>
    </div>
  );
}
export default Endpoint;
