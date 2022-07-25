import React from 'react';
import Image from 'next/image';
import logoImage from '@/public/assets/images/logo.svg';

const Logo = () => {
  return <Image src={logoImage} alt="comx logo " />;
};
export default Logo;
