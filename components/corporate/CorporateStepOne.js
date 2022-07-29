import React from 'react';
import { Button, DatePicker, Input, Select } from '@/components/form';
import Link from 'next/link';
const RegisterStepOne = ({ validation }) => {
  const sampleData = [
    { title: 'Partnership', value: 'Partnership' },
    { title: 'Private', value: 'Private' },
    { title: 'Sole proprietorship', value: 'sole_proprietorship' },
    { title: 'Corporation', value: 'corporation' },
    { title: 'Nonprofit', value: 'nonprofit' }
  ];
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
                <Button color="teritary" className="w-[146px] h-[52px]">
                  Individual
                </Button>
              </a>
            </Link>
            <Link href="/corporate-register">
              <a>
                <Button color="secondary" className="w-[146px] h-[52px]">
                  Corporate
                </Button>
              </a>
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-6 gap-2 col-span-full lg:col-span-3 mt-4">
              <div className="col-span-full ">
                <Input
                  label="Company Name"
                  name="companyName"
                  validation={validation}
                  placeholder="Enter your company Name"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Select
                  label="Type of Business "
                  defaultOption="Select Type of Business"
                  name="businessType"
                  options={sampleData}
                  validation={validation}
                />
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <div className="py-1">
                  <DatePicker
                    name="incorporationDate"
                    validation={validation}
                    label="Date of Incorporation"
                    placeholder="Select Date"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterStepOne;
