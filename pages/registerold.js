import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { Button, Input, Select } from '@/components/form';
import HookForm from '@/components/form/Form';
import { SignInSchema } from '../schema/authSchema';
import Link from 'next/link';
import { StepsProgress } from '@/components/StepsProgress';
import StepNavigation from '@/components/StepNavigation';
import data from '@/data/multiStepForm';
import classNames from 'classnames';

import StepOne from '@/components/individual/RegisterStepOne';
import StepTwo from '@/components/individual/RegisterStepTwo';
import StepThree from '@/components/individual/RegisterStepThree';
import StepComplete from '@/components/individual/RegistionComplete';

export default function Register() {
  const [visibleStep, setVisibleStep] = React.useState(data[0].id);
  const [step, setStep] = useState(1);

  const All_STEP = [<></>, <StepOne key="1" />, <StepTwo key="2" />, <StepThree key="3" />, <StepComplete key="4" />];

  const lastStep = All_STEP.length - 1;

  // const Steps = data.map((item, index) => <StepsProgress key={index} step={item.id} />);

  // const Content = data.map((item, index) => (
  //   <div className="mt-20" key={index} style={visibleStep === item.id ? {} : { display: 'none' }}>
  //     {item.content}
  //   </div>
  // ));

  // const handleClick = (direction) => {
  //   let newStep = visibleStep;
  //   direction === 'next' ? newStep++ : newStep--;
  //   newStep > 0 && newStep <= data.length && setVisibleStep(newStep);
  // };

  const sampleData = [
    { title: 'NGR', value: '+234' },
    { title: 'USA', value: '+679' },
    { title: 'MAX', value: '+567' }
  ];
  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    // setStep(step + 1);
  };
  return (
    <>
      <div className="overflow-y-scroll  max-w-full h-screen bg-primary-100 w-full py-5 px-4">
        <div className="flex flex-col items-center justify-center">
          <Logo />

          <div className=" mb-5 lg:mb-12">
            {/* <StepsProgress step={visibleStep} /> */}

            {/* <StepsProgress key={index} step={item.id} /> */}
            {/* <HookForm>{Content}</HookForm>*/}

            {/* <StepNavigation handleClick={handleClick} visibleStep={visibleStep} data={data} /> */}
            <div className="bg-white shadow rounded lg:w-[500px]  md:w-full w-full px-4 py-2 md:p-8 mt-8 md:mt-12 ">
              <HookForm onSubmit={onSubmit} schema={SignInSchema}>
                <div className="text-center font-normal ">
                  <p className="text-xl md:text-3xl  text-black-200">Register new account</p>
                  <p className="text-sm mt-2 text-black-100">Sign up for an account and start trading today</p>

                  <div className="mt-6 text-left">
                    <p className="text-black-400 text-sm my-2 font-semibold">
                      Select select the category that best describes you
                    </p>
                    <div className="flex items-center gap-2">
                      <Button color="secondary" className="w-[146px] h-[52px]">
                        Individual
                      </Button>
                      <Button color="teritary" className="w-[146px] h-[52px]">
                        Corporate
                      </Button>
                    </div>

                    {All_STEP[step]}

                    {step === lastStep && (
                      <div className="mt-8 text-center">
                        <div className="text-red-300 uppercase font-semibold "> Go to dashboard </div>
                      </div>
                    )}
                    {step === lastStep - 1 && (
                      <div onClick={() => setStep(step + 1)} className="mt-8 text-center">
                        <div className="text-red-300 uppercase font-semibold "> finish </div>
                      </div>
                    )}
                    {step !== lastStep && step !== lastStep - 1 && (
                      <div onClick={() => setStep(step + 1)} className="mt-8 text-center">
                        <div className="text-red-300 uppercase font-semibold "> Next Step </div>
                      </div>
                    )}

                    {/* <div className="grid grid-cols-6 gap-2 col-span-full lg:col-span-3 mt-4">
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
                    </div>*/}
                    <div className=" my-5 text-black-100 ">
                      {step} /{lastStep}
                    </div>
                    <StepsProgress step={step} lastStep={lastStep} onClick={() => setStep(step + 1)} />
                  </div>
                </div>
              </HookForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
