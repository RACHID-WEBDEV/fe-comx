import React from 'react';
import { Button, Input } from '@/components/form';
import Link from 'next/link';
const RegisterStepOne = ({ validation }) => {
  return (
    <>
      <div className="text-center font-normal ">
        <p className="text-xl md:text-3xl  text-black-200">Register new account</p>
        <p className="text-sm mt-2 text-black-100">Sign up for an account and start trading today</p>

        <div className="mt-10 text-left">
          <p className="text-black-400 text-sm my-2 font-semibold">
            Select select the category that best describes you
          </p>
          <div className="flex items-center gap-2">
            <Link href="/register">
              <a>
                <Button color="secondary" className="w-[146px] h-[52px]">
                  Individual
                </Button>
              </a>
            </Link>
            <Link href="/corporate-register">
              <a>
                <Button color="teritary" className="w-[146px] h-[52px]">
                  Corporate
                </Button>
              </a>
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-6 gap-2 col-span-full lg:col-span-3 mt-4">
              <div className="col-span-full sm:col-span-3">
                <Input
                  label="Your First Name"
                  name="fname"
                  validation={validation}
                  placeholder="Enter your First Name"
                />
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <Input label="Your Last Name" name="lname" validation={validation} placeholder="Enter your Last Name" />
              </div>

              <div className="col-span-full ">
                <Input label="Your Email" name="email" validation={validation} placeholder="Enter your Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterStepOne;
