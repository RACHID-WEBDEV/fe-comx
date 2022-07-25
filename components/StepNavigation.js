import Link from 'next/link';
import PropTypes from 'prop-types';

import React from 'react';

const StepNavigation = ({ handleClick, visibleStep, data }) => {
  return (
    <div className="py-10 mt-5">
      {visibleStep === 1 && (
        <div onClick={() => handleClick('next')} className="mt-8 text-center">
          <button className="text-red-300 uppercase font-semibold "> Next Step </button>
        </div>
      )}

      {visibleStep === 2 && (
        <div onClick={() => handleClick('next')} className="mt-8 text-center">
          <button className="text-red-300 uppercase font-semibold "> Verify Account </button>
        </div>
      )}
      {visibleStep === 3 && (
        <div className="flex justify-between items-center gap-2">
          <div onClick={handleClick()} className="mt-8 text-center">
            <button className="text-black-100 uppercase font-semibold ">Back</button>
          </div>

          <div onClick={() => handleClick('next')} className="mt-8 text-center">
            <button className="text-red-300 uppercase font-semibold "> Finish </button>
          </div>
        </div>
      )}

      {visibleStep === data.length && (
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
