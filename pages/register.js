import React, { useState } from 'react';
import Logo from '@/components/Logo';
import HookForm from '@/components/form/Form';
import { IndividualRegSchema } from '../schema/authSchema';
import { StepsProgress } from '@/components/StepsProgress';
import StepNavigation from '@/components/StepNavigation';
import data from '@/data/multiStepForm';
import classNames from 'classnames';

import StepOne from '@/components/individual/RegisterStepOne';
import StepTwo from '@/components/individual/RegisterStepTwo';
import StepThree from '@/components/individual/RegisterStepThree';
import StepComplete from '@/components/individual/RegistionComplete';

// import { useFormContext } from 'react-hook-form';

const firstStep = ['fname', 'lname', 'email'];
const secondStep = ['password', 'confirmPassword', 'phone'];
const thirdStep = ['otp'];

const RegisterForm = ({ step, setStep, lastStep, All_STEP }) => {
  return (
    <>
      {All_STEP[step]}

      <StepNavigation step={step} lastStep={lastStep} setStep={setStep} />
    </>
  );
};

const Register = () => {
  const [step, setStep] = useState(1);

  const All_STEP = [
    <></>,
    <StepOne validation={firstStep} key="1" />,
    <StepTwo key="2" validation={secondStep} />,
    <StepThree validation={thirdStep} key="3" />,
    <StepComplete key="4" />
  ];

  const lastStep = All_STEP.length - 1;

  // const handleNext = async (step) => {
  //   let isValid = false;

  //   switch (step) {
  //     case 0:
  //       isValid = await trigger(['fname,lname,email']);
  //       break;
  //     case 1:
  //       isValid = await trigger(['password,confirmPassword,phone']);
  //       break;
  //     case 2:
  //       isValid = await trigger(['otp']);
  //       break;
  //   }
  //   if (isValid) {
  //     setStep(step + 1);
  //   }
  // };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    setStep(step + 1);
  };
  return (
    <>
      <div className="overflow-y-scroll  max-w-full h-screen bg-primary-100 w-full py-5 px-4">
        <div className="flex flex-col items-center justify-center">
          <Logo />

          <div className=" mb-5 ">
            <div className="bg-white shadow rounded lg:w-[500px]  md:w-full w-full px-4 py-2 md:pt-8 pb-6 mt-8 md:mt-12 ">
              <HookForm onSubmit={onSubmit} schema={IndividualRegSchema}>
                <div className="text-center font-normal ">
                  <RegisterForm step={step} setStep={setStep} lastStep={lastStep} All_STEP={All_STEP} />
                </div>
              </HookForm>
            </div>
          </div>

          <div className="text-center mb-1 font-semibold">
            <span
              className={classNames({ 'text-black-300': step <= lastStep }, { 'text-black-700': step === lastStep })}
            >
              {step}
            </span>
            /<span className="text-black-700">{lastStep}</span>
          </div>
        </div>

        <div className="max-w-md my-10 mx-auto">
          <StepsProgress step={step} lastStep={lastStep} />
        </div>
      </div>
    </>
  );
};

export default Register;
