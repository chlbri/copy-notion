import React, { FC } from 'react';

const CTA: FC = () => {
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          return console.log('TODO submit form');
        }}
        className="hidden md:flex"
      >
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your mail"
          className="text-sm bg-white rounded-l-lg px-3 py-1 border border-gray-200"
        />
        <input
          type="submit"
          value="Get started"
          className="text-sm bg-red-400 border border-red-500 border-opacity-60 text-white rounded-r-lg px-3"
        />
      </form>
      <div className="text-sm bg-red-400 border border-red-500 border-opacity-60 text-white rounded-lg px-3 py-1 flex md:hidden items-center space-x-3 mx-auto max-w-max">
        <span className="text-xl"></span>
        <span>Download from App Store</span>
      </div>
    </>
  );
};

export default CTA;
