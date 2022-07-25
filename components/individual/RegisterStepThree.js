import React from 'react';
import Link from 'next/link';
import { Input } from '../form';

const RegisterStepThree = () => {
  return (
    <>
      <div className="my-2">
        <Input label="Enter the Email Address you registered with" placeholder="Your Email" name="email" type="email" />
      </div>
      <p className="text-xs text-primary-300/80 text-center">
        Note that you’ll be sent an OTP to the email address provided
      </p>
      <div className="mt-40 mb-5 lg:mb-0 flex items-center justify-between text-sm font-semibold uppercase">
        <Link href="/sign-in">
          <a>
            <p className="text-black-100 "> Back</p>
          </a>
        </Link>

        <button className="text-red-300 uppercase font-bold "> Proceed</button>
      </div>
    </>
  );
};

export default RegisterStepThree;
