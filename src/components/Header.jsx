import React from 'react';
import { images } from '../constants';

const navItem = [
  { name: 'Home' },
  { name: 'Articles' },
  { name: 'Pages' },
  { name: 'Pricing' },
  { name: 'Faq' },
];

const NavItems = ({ name }) => {
  return (
    <li className="relative group">
      <a href="/" className="px-4 py-2">
        {name}
      </a>
      <span className="text-blue-500 absolute trasition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

const Header = () => {
  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img src={images.Logo} alt="Logo" />
        </div>
        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-2 font-semibold text-base">
            {navItem.map((item) => (
              <NavItems key={item.name} name={item.name} />
            ))}
          </ul>
          <button className="text-[#1565D8] text-base font-bold border-2 border-[#1565D8] border-solid px-6 py-2 rounded-full hover:bg-[#1565D8] hover:text-white transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
