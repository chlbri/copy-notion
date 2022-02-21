import React, { FC } from 'react';

type NavItemProps = {
  children: string;
};

const NavItem: FC<NavItemProps> = ({ children }) => (
  <li>
    <a
      href="#"
      className="text-sm font-bold text-gray-700 px-2 py-1 hover:bg-gray-300 cursor-pointer rounded transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

export default NavItem;
