import React from 'react';
import { Input, Select } from '@/components/form';

const RegisterStepTwo = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-2 col-span-full lg:col-span-3 mt-4">
        <div className="col-span-full">
          <Input label="Password" name="password" placeholder="Enter your password" />
        </div>
        <div className="col-span-full ">
          <Input label="Confirm Password" name="confirmPassword" placeholder="Confirm Password" />
        </div>

        <div className="col-span-full">
          <Input label="Phone Number" name="phone" type="number" placeholder="Enter your phone number">
            <div className="w-28">
              <Select defaultOption="+234" name="select" options={sampleData} />
            </div>
          </Input>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="text-red-300 uppercase font-semibold "> Verify Account </button>
      </div>
    </>
  );
};

export default RegisterStepTwo;
