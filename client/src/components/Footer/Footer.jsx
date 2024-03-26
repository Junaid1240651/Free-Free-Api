import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.jpg"

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <footer className='flex flex-col items-center justify-center bg-gray-950 text-white text-center p-14 pr-16'>
            <img className='h-14' src={logo} alt="Logo"/>
            <p className='p-6 text-lg'>
                <strong>TestTest API © {year}</strong>
            </p>
            <div className='grid grid-cols-3 text-center text-sky-300 text-md'>
                <p className='col-span-1'><NavLink to="/TermsOfService">
                    Terms of Service
                </NavLink></p>
                <p className='text-white'>-</p>
                <NavLink className='col-span-1' to="/PrivacyPolicy">
                    Privacy Policy
                </NavLink>
            </div>
        </footer>
    )
}

export default Footer;

