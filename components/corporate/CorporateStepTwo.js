import React from 'react';
import { Input } from '@/components/form';

const RegisterStepTwo = () => {
  return (
    <>
      <p className="text-xl md:text-3xl  text-black-200">Register new account</p>
      <p className="text-sm mt-2 text-black-100">Sign up for an account and start trading today</p>

      <div className="mt-10 text-left">
        <div className="grid grid-cols-6 gap-2 col-span-full lg:col-span-3 mt-4">
          <div className="col-span-full">
            <Input label="Company Email" name="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="col-span-full">
            <Input label="Password" name="password" placeholder="Enter your password" type="password" />
          </div>
          <div className="col-span-full ">
            <Input
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              type="password"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterStepTwo;
