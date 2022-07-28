import React from 'react';
import Image from 'next/image';
import logoImage from '@/public/assets/images/logo.svg';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src={logoImage} alt="comx logo " />
      </a>
    </Link>
  );
};
export default Logo;
