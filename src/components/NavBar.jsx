import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className={`z-10 flex justify-between items-center w-full h-16 px-20 text-white bg-black fixed navbar ${blur ? "bg-gray-700" : ""}`}>
      <div>
        <h1 className="text-5xl font-signature pt-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Darshan</h1>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-110 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;


// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";

// const NavBar = () => {
//   const [nav, setNav] = useState(false);
//   window.addEventListener('scroll', function() {
//     const navbar = document.getElementsByClassName('navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('blur');
//     } else {
//         navbar.classList.remove('blur');
//     }
// });
//   const links = [
//     {
//       id: 1,
//       link: "home",
//     },
//     {
//       id: 2,
//       link: "about",
//     },
//     {
//       id: 3,
//       link: "portfolio",
//     },
//     {
//       id: 4,
//       link: "experience",
//     },
//     {
//       id: 5,
//       link: "contact",
//     },
//   ];

//   return (
//     <div className="z-10 flex justify-between items-center w-full h-20 px-20 text-white bg-black fixed navbar">
//       <div>
//         <h1 className="text-5xl font-signature pt-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Darshan</h1>
//       </div>

//       <ul className="hidden md:flex ">
//         {links.map(({ id, link }) => (
//           <li
//             key={id}
//             className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-110 duration-200 "
//           >
//             <Link to={link} smooth duration={500}>
//               {link}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
//       >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>

//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
//           {links.map(({ id, link }) => (
//             <li
//               key={id}
//               className="px-4 cursor-pointer capitalize py-6 text-4xl"
//             >
//               <Link
//                 onClick={() => setNav(!nav)}
//                 to={link}
//                 smooth
//                 duration={500}
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NavBar;
