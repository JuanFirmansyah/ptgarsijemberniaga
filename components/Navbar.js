import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [clientWindowHeight, setClientWindowHeight] = useState('');

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 20 - backgroundTransparacyVar * 80;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <header
      className="fixed w-full h-auto top-0 z-50 font-body bg-black"
      style={{
        background: `rgba(254, 230, 242, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center h-auto">
        <div className="flex items-center justify-between flex-wrap content-center h-full w-full z-50 px-4 md:px-10 text-sm">
          <div className="relative h-14 w-16 md:h-full md:w-full mt-2 md:mt-0 py-4">
            <Image
              priority
              src="/logo-background.png"
              width="84"
              height="84"
              alt="Logo Garsi"
            />
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white block md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  className={!isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen
              ? '-translate-y-0 h-16'
              : '-translate-y-2 opacity-0 md:-translate-x-0 md:opacity-100 h-4'
          } md:flex flex-col md:flex-row justify-end w-full container transition-all duration-500 ease-in pr-0 md:pr-24`}
        >
          <ul className="flex flex-row text-sm md:text-base w-full text-black font-normal justify-center items-center gap-x-7 md:gap-x-14 pt-2">
            <li className="block py-5">
              <Link legacyBehavior href="#paket">
                <a className="tracking-wider">Beranda</a>
              </Link>
            </li>
            <li className="block py-5">
              <Link legacyBehavior href="#about">
                <a>About</a>
              </Link>
            </li>
            <li className="block py-5">
              <Link legacyBehavior href="#testimonial">
                <a>Partner</a>
              </Link>
            </li>
            <li className="block py-5">
              <Link legacyBehavior href="#qna">
                <a>QnA</a>
              </Link>
            </li>
            <li className="block py-5 bg-red-600 text-white hover:text-black hover:bg-white transition-all delay-100 p-4 rounded-xl">
              <Link legacyBehavior href="#paket">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

// return (
// <>
//   <nav
//     className={`${
//       isOpen ? 'block' : '-translate-x-full'
//     } flex fixed bg-white h-[100%] w-[50%] left-0 top-0 z-40 text-black transition ease-in duration-1000`}
//   >
//     <button
//       onClick={() => setIsOpen(!isOpen)}
//       className="absolute top-6 right-6 md:right-96"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-8 w-8"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M6 18L18 6M6 6l12 12"
//         />
//       </svg>
//     </button>
//     <div className="relative w-full h-full my-[50%] text-left text-base md:text-3xl">
//       <Link legacyBehavior href="/">
//         <a className="block px-8 py-10 hover:bg-gradient-to-r from-yellow-500 via-transparent to-transparent -mt-0 md:-mt-36">
//           Home
//         </a>
//       </Link>
//       <Link legacyBehavior href="/our-projects">
//         <a className="block px-8 py-10 hover:bg-gradient-to-r from-yellow-500 via-transparent to-transparent">
//           Our Projects
//         </a>
//       </Link>
//       <Link legacyBehavior href="/contact">
//         <a className="block px-8 py-10 hover:bg-gradient-to-r from-yellow-500 via-transparent to-transparent">
//           Contact
//         </a>
//       </Link>
//     </div>
//   </nav>
//   <div className="flex flex-col lg:flex-row fixed top-0 justify-between h-44 md:h-24 w-full px-8 md:px-14 z-20 items-center bg-white">
//     <div className="flex">
//       <a href="#" className="flex">
//         <img
//           src="/aico-icon.png"
//           className="h-28 md:h-32"
//           alt="aico-logo"
//         ></img>
//       </a>
//     </div>
//     <div
//       className="flex justify-center md:justify-end w-full h-auto gap-x-10
//      text-base text-black -mt-16 md:-mt-0"
//     >
//       <a href="#home">
//         <button className="opacity-60 focus:opacity-100">home</button>
//       </a>
//       <a href="#portofolio">
//         <button className="opacity-60 focus:opacity-100">portofolio</button>
//       </a>
//       <a href="#service">
//         <button className="opacity-60 focus:opacity-100">service</button>
//       </a>
//       <a href="#about">
//         <button className="opacity-60 focus:opacity-100">about</button>
//       </a>
//     </div>
//     <div className="flex">
//       <button onClick={() => setIsOpen(true)} className=" hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 md:h-10 text-white"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h7"
//           />
//         </svg>
//       </button>
//     </div>
//   </div>
// </>
