import * as React from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { useOutsideAlerter } from "./use-outside-alerter";
import { Initials } from "./icons";

export function Navigation(props) {

  // <nav className="fixed w-full text-xs font-normal font-sans leading-none h-12 bg-opacity-80 bg-gray-900 text-white flex items-center">

  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsOpen(false));

  return (
    // <div style={{
    //   position: 'fixed',
    //   width: '100%',
    //   fontSize: '12px',
    //   fontWeight: 400,
    //   fontFamily: 'SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif',
    //   lineHeight: 1,
    //   height: '45px',
    //   background: 'rgba(22, 22, 23, .8)',
    //   color: 'white',
    //   display: 'flex',
    //   alignItems: 'center'
    // }}>
    //   test header
    // </div>


    // <nav className="fixed w-screen bg-white border-gray-200 dark:bg-gray-900">
    <nav ref={wrapperRef} className="fixed z-10 w-full text-xs font-normal font-sans leading-none h-12 bg-opacity-80 bg-gray-900 text-white flex items-center">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto bg-green-400">
        <a href="https://pauldevnull.dev/" className="flex items-center">
          {/*<img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>*/}
          <Initials />
          {/*<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>*/}
        </a>
        <button data-collapse-toggle="navbar-default" type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
          </svg>
        </button>
        <div className={`${isOpen ? 'visible' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-20 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/*<li>*/}
            {/*  <a href="#"*/}
            {/*     className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"*/}
            {/*     aria-current="page">Home</a>*/}
            {/*</li>*/}
            <li>
              <Link to="about" smooth={true} className="block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                About
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} className="block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Experience
              </Link>
            </li>
            <li>
              <Link to="code" smooth={true} className="block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Code
              </Link>
            </li>
            <li>
              <Link to="beliefs" smooth={true} className="block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Beliefs
              </Link>
            </li>
            <li>
              <Link to="learning" smooth={true} className="block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Learning
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} className="block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent bg-red-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
