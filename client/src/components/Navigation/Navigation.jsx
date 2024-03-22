import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
    const name = '{"YOUR":"CRUD"}';
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const renderNavbar = () => {
        if (isMobile) {
            return (
                <div>
                    <div className="text-white bg-gray-950">
                        <NavLink to="/" className="text-1xl font-serif p-1 border-4 border-white m-2 inline-block hover:bg-gray-800">{name}</NavLink>
                        <div onClick={toggleMenu} style={{float: 'right'}}>
                            {isOpen ? <img style={{ height: '30px', width: '30px', margin: '13px' }} src="/close-button.png" alt="Close" /> : <img style={{ height: '30px', width: '30px', margin: '13px' }} src="/menu.png" alt="Menu" />}
                        </div>
                    </div>
                    {isOpen && (
                        <ul className="text-white bg-gray-950">
                            <li><NavLink to="/" className="text-1xl py-2 px-4 inline-block hover:bg-gray-800">Home</NavLink></li>
                            <li><NavLink to="/dashboard" className="text-1xl py-2 px-4 inline-block hover:bg-gray-800">Dashboard</NavLink></li>
                        </ul>
                    )}
                </div>
            );
        } else {
            return (
                
                    <nav className="text-white bg-gray-950 flex justify-between items-center">
                        <NavLink to="/" className="text-1xl p-4 inline-block hover:bg-gray-800">Home</NavLink>
                        <NavLink to="/" className="text-1xl font-serif p-1 border-4 border-white m-2 ml-12 inline-block hover:bg-gray-800">{name}</NavLink>
                        <NavLink to="/dashboard" className="text-1xl p-4 inline-block hover:bg-gray-800">Dashboard</NavLink>
                    </nav>
                
            )
        }
    }

    return (
        <React.Fragment>
            {renderNavbar()}
        </React.Fragment>
    )

}

// export default Navigation;

// import React from "react";

// function Navigation() {
//   return (
//     <>
//       <nav class="bg-gray-950 text-white min-h-14 w-full flex items-center justify-between text-2xl">
//         <NavLink class="p-4 hover:bg-sky-900" to="/">
//           Home
//         </NavLink>
//         <div class="cursor-pointer overflow-none">
//           <NavLink to="/" className="font-serif">
//             {name}
//           </NavLink>
//         </div>
//         <NavLink class="p-4 hover:bg-sky-900" to="/dashboard">
//           Dashboard
//         </NavLink>
//       </nav>
//       {props.children}
//     </>
//   );
// }

export default Navigation;