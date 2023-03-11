import React, { useState } from 'react';
import { images } from '../constants';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

const navItem = [
  { name: 'Home', type: 'link' },
  { name: 'Articles', type: 'link' },
  { name: 'Pages', type: 'dropdown', items: ['AboutUs', 'ContactUs'] },
  { name: 'Pricing', type: 'link' },
  { name: 'Faq', type: 'link' },
];

const NavItems = ({ item }) => {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    setDropDown((currentState) => {
      return !currentState;
    });
  };

  return (
    <li className="relative group">
      {item.type === 'link' ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="text-blue-500 absolute trasition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropDown}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropDown ? 'block' : 'hidden'
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page) => (
                <a
                  href="/"
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-hard"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavVisible((currentState) => {
      return !currentState;
    });
  };

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-16" src={images.Logo} alt="Logo" />
        </div>
        <div className="lg:hidden z-50 cursor-pointer">
          {navVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${navVisible ? 'right-0' : '-right-full'} 
          z-[49] transition-all duration-300 bg-dark-hard lg:bg-transparent mt-[56px] lg:mt-0 flex flex-col w-full lg:w-auto lg:flex-row justify-center lg:justify-end fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white lg:text-dark-hard flex flex-col lg:flex-row items-center gap-y-5 gap-x-2 font-semibold text-base">
            {navItem.map((item) => (
              <NavItems key={item.name} item={item} />
            ))}
          </ul>
          <button className="text-primary text-base font-bold border-2 border-primary border-solid px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 mt-[20px] lg:mt-0">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
