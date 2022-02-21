import React, { FC } from 'react';
import Links from './Links';
import Logo from './Logo';

export const NavBar: FC = () => {
  return (
    <nav className="flex justify-between py-2 mb-12 md:mb-20 mx-2">
      <Logo />

      <Links />
    </nav>
  );
};
