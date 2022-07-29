import React from 'react';
import Link from 'next/link';
import { Input } from '../form';

const RegisterStepThree = ({ validation }) => {
  return (
    <>
      <p className="text-xl md:text-3xl  text-black-200">Account details</p>
      <p className="text-sm mt-2 text-black-100">Sign up for an account and start trading today</p>

      <div className="mt-10 text-left">
        <div className="mb-40">
          <div className="my-2">
            <Input
              label="Enter the 4-digit code that was sent to +23472639482 and 
            name@mymail.com"
              placeholder="Enter code"
              name="otp"
              type="number"
              validation={validation}
            />
          </div>
          <p className="text-xs text-primary-300/80 text-center">Resend Code</p>
        </div>

        {/* <div className=" mb-5 lg:mb-0 flex items-center justify-between text-sm font-semibold uppercase">
          <Link href="/sign-in">
            <a>
              <p className="text-black-100 "> Back</p>
            </a>
          </Link>

          <button className="text-red-300 uppercase font-bold "> Proceed</button>
        </div> */}
      </div>
    </>
  );
};

export default RegisterStepThree;
