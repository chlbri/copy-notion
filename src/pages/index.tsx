import Head from 'next/head';
import Image from 'next/image';
import React, { FC } from 'react';
import Hero from '../components/Home/Hero';

const Home_Page: FC = () => (
  <div className="space-y-5 md:space-y-0 md:space-x-3 flex flex-col-reverse md:flex-row items-center">
    <Head>
      <title>Home</title>
    </Head>
    <div className="flex text-center md:text-left flex-col max-w-3xl mx-auto px-2">
      <h1 className="font-bold text-6xl leading-tight">
        All-in-on Workspace
      </h1>
      <Hero />
    </div>
    <div className="w-full lg:w-2/5 p-10 md:p-0">
      <div className="relative w-full aspect-ipad-landscape mx-auto md:mx-0">
        <Image
          src="/images/home-page-hero-refreshed-v3.png"
          layout="fill"
          alt="WorkSpace"
        />
      </div>
    </div>
  </div>
);

export default Home_Page;
