import React, { useState } from 'react';
import Logo from '@/components/Logo';
import HookForm from '@/components/form/Form';

import { CorporateRegSchema } from '../schema/authSchema';
import { StepsProgress } from '@/components/StepsProgress';
import StepNavigation from '@/components/StepNavigation';
import classNames from 'classnames';

import StepOne from '@/components/corporate/CorporateStepOne';
import StepTwo from '@/components/corporate/CorporateStepTwo';
import StepThree from '@/components/corporate/CorporateStepThree';
import StepComplete from '@/components/corporate/CorporateComplete';

export default function Corporate() {
  const [step, setStep] = useState(1);
  const firstStep = ['companyName', 'businessType', 'incorporationDate'];
  const secondStep = ['email', 'password', 'confirmPassword'];
  const thirdStep = ['otp'];

  const All_STEP = [
    <></>,
    <StepOne validation={firstStep} key="1" />,
    <StepTwo validation={secondStep} key="2" />,
    <StepThree validation={thirdStep} key="3" />,
    <StepComplete key="4" />
  ];

  const lastStep = All_STEP.length - 1;

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
              <HookForm onSubmit={onSubmit} schema={CorporateRegSchema}>
                <div className="text-center font-normal ">
                  {All_STEP[step]}

                  <StepNavigation step={step} lastStep={lastStep} setStep={setStep} />
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
}
