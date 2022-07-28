import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const StepNavigation = ({ step, lastStep, setStep, name }) => {
  const {
    trigger,
    formState: { dirtyFields, errors, ...first },
    getValues,
    clearErrors,
    resetField
  } = useFormContext();

  const hasErrors = !!errors?.[name] && !!dirtyFields?.[name] && !!getValues(name) && ['fname', 'email'].includes(name);
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  console.log('formstate', { dirtyFields, errors, first });

  // const handleNextstep = step === 1 && (!hasErrors || hasErrors || !isValid) ? setStep(step - 1) : setStep(step + 1);

  //const handleNext = async () => {
  const handleNext = async () => {
    let isValid = false;
    console.log('getValue Nav', getValues());
    // const result = await trigger();
    // console.log(result);

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
    clearErrors();

    // resetField('fname');
    if (isValid) {
      setStep(step + 1);
    }
  };
  //() => setStep(step + 1) //setStep Function
  return (
    <div className="py-5 mt-5">
      <button onClick={handleNext} className="text-black-100 uppercase font-semibold ">
        Trigeer
      </button>
      {step === 1 && (
        <div onClick={() => setStep(step + 1)} className="text-red-300 text-center uppercase font-semibold ">
          Next Step
        </div>
      )}

      {step === 2 && (
        <>
          <button onClick={() => setStep(step - 1)} className="text-black-100 uppercase font-semibold ">
            Back
          </button>
          <div onClick={() => setStep(step + 1)} className="text-red-300 text-center uppercase font-semibold ">
            Verify ACCOUNT
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
          <button className="text-red-300 uppercase font-semibold "> Go to dashboard</button>
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
