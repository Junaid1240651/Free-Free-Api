import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-950 text-white text-center p-14 pr-16">
        <img className="h-14" src={Logo} alt="Logo" />
        <p className="p-6 text-lg">
          <strong>TestTest API © 2024</strong>
        </p>
        <div className="grid grid-cols-3 text-center text-sky-300 text-md">
          <p className="col-span-1">
            <Link to="/TermsOfService">Terms of Service</Link>
          </p>
          <p className="text-white">-</p>
          <p className="col-span-1">
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer;
