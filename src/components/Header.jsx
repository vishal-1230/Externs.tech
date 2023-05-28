import React from 'react';
import './Header.module.css'
import Logo from '../assets/externsonly.svg'
const Header = () => {
  return (
    <div className=''>

      <header className="flex justify-between items-center p-4 font-Raleways drop-shadow-2xl shadow-md">
        <div className="w-24 md:w-32 lg:w-40">
          <img src={Logo} alt="Logo" className="w-20 " />
        </div>
        <h1 className='text-3xl'>Externs</h1>
        <nav>
          <ul className="flex">
            <li className="mx-2"><a href="#">Services</a></li>
            <li className="mx-2"><a href="#">Portfolio</a></li>
            <li className="mx-2"><a href="#">Get-Quote</a></li>
            <li className="mx-2"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;




// import React, { useState } from 'react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="flex justify-between items-center p-4">
//       <div className="w-24 md:w-32 lg:w-40">
//         <img src="/path/to/your/logo.png" alt="Logo" className="w-full" />
//       </div>
//       <button
//         className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
//           {isOpen ? (
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//             />
//           ) : (
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1