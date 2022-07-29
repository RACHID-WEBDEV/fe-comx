import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

const StepNavigation = ({ step, lastStep, setStep }) => {
  const { asPath } = useRouter();
  const corporateRegPath = '/corporate-register' === asPath;

  const { trigger } = useFormContext();

  const handleNextCorperate = async () => {
    let isValid = false;

    switch (step) {
      case 1:
        isValid = await trigger(['companyName', 'businessType', 'incorporationDate']);
        break;
      case 2:
        isValid = await trigger(['email', 'password', 'confirmPassword']);
        break;
      case 3:
        isValid = await trigger(['otp']);
        break;
    }
    if (isValid) {
      setStep(step + 1);
    }
  };

  const handleNext = async () => {
    let isValid = false;

    switch (step) {
      case 1:
        isValid = await trigger(['fname', 'lname', 'email']);
        break;
      case 2:
        isValid = await trigger(['password', 'confirmPassword', 'phone']);
        break;
      case 3:
        isValid = await trigger(['otp']);
        break;
    }
    // clearErrors()
    if (isValid) {
      setStep(step + 1);
    }
  };

  return (
    <div className="py-5 mt-5">
      {step === 1 && (
        <button
          type="button"
          onClick={corporateRegPath ? handleNextCorperate : handleNext}
          className="text-red-300 uppercase font-semibold "
        >
          Next Step
        </button>
      )}

      {step === 2 && (
        <>
          <div className="flex justify-between items-center gap-2 px-8">
            <button onClick={() => setStep(step - 1)} className="text-black-100 uppercase font-semibold ">
              Back
            </button>
            <div
              onClick={corporateRegPath ? handleNextCorperate : handleNext}
              type="button"
              className="text-red-300 text-center uppercase font-semibold "
            >
              Verify ACCOUNT
            </div>
          </div>
        </>
      )}

      {step === lastStep - 1 && (
        <div className="flex justify-between items-center gap-2 px-8">
          <button onClick={() => setStep(step - 1)} className="text-black-100 uppercase font-semibold ">
            Back
          </button>

          <button className="text-red-300 uppercase font-semibold ">Finish</button>
        </div>
      )}

      {step === lastStep && (
        <Link href="/dashboard" passHref>
          <a>
            <button className="text-red-300 uppercase font-semibold "> Go to dashboard</button>
          </a>
        </Link>
      )}
    </div>
  );
};

StepNavigation.propTypes = {
  handleClick: PropTypes.func,
  data: PropTypes.array
};

StepNavigation.defaultProps = {
  handleClick: () => {},
  data: []
};
export default StepNavigation;
