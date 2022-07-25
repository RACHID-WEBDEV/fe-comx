import React from 'react';
import { Input } from '@/components/form';
const RegisterStepOne = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-2 col-span-full lg:col-span-3 mt-4">
        <div className="col-span-full sm:col-span-3">
          <Input label="Your First Name" name="fname" placeholder="Enter your First Name" />
        </div>
        <div className="col-span-full sm:col-span-3 ">
          <Input label="Your Last Name" name="lname" placeholder="Enter your Last Name" />
        </div>

        <div className="col-span-full ">
          <Input label="Your Email" name="email" placeholder="Enter your Email" />
        </div>
      </div>
    </div>
  );
};

export default RegisterStepOne;
