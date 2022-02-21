import React, { FC } from 'react';
import NavItem from '../Item';
import datas from './data.json';

const Links: FC = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex space-x-2">
        {datas.map((data, i) => (
          <NavItem key={i}>{data}</NavItem>
        ))}
      </ul>
    </div>
  );
};

export default Links;
