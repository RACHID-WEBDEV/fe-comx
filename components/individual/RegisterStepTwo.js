import React from 'react';
import { Input, Select } from '@/components/form';

const RegisterStepTwo = ({ validation }) => {
  const sampleData = [
    { title: 'NGR', value: '+234' },
    { title: 'USA', value: '+679' },
    { title: 'MAX', value: '+567' }
  ];
  return (
    <>
      <p className="text-xl md:text-3xl  text-black-200">Register new account</p>
      <p className="text-sm mt-2 text-black-100">Sign up for an account and start trading today</p>

      <div className="mt-10 text-left">
        <div className="grid grid-cols-6 gap-2 col-span-full lg:col-span-3 mt-4">
          <div className="col-span-full">
            <Input
              label="Password"
              name="password"
              validation={validation}
              placeholder="Enter your password"
              type="password"
            />
          </div>
          <div className="col-span-full ">
            <Input
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              type="password"
              validation={validation}
            />
          </div>

          <div className="col-span-full">
            <Input
              label="Phone Number"
              validation={validation}
              name="phone"
              type="number"
              placeholder="Enter your phone number"
            >
              <div className="w-28">
                <Select defaultOption="+234" name="select" options={sampleData} />
              </div>
            </Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterStepTwo;
