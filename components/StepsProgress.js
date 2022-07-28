import React from 'react';
import classNames from 'classnames';

export const StepsProgress = ({ lastStep, step }) => {
  return (
    <div className="w-full bg-primary-200 relative rounded-full h-1 mb-4 ">
      {/* <div className={'bg-red-300 h-1 rounded-full'} style={{ width: `${(step / lastStep) * 100}%` }} /> */}
      <div
        className={classNames(
          'bg-red-300 h-1 rounded-full',
          { 'w-[33.3%]': step === 1 },
          { 'w-[66.6%]': step === 2 },
          { 'w-[97%]': step === 3 }
        )}
      ></div>
      {/* style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }} */}
      <div className={classNames('h-3 w-3 rounded-full shadow absolute -top-[4px] left-0 bg-red-300')}></div>
      <div
        className={classNames(
          'h-3 w-3 rounded-full shadow absolute -top-[4px]  left-[33.3%]',
          {
            'bg-primary-200': step <= lastStep
          },
          {
            'bg-red-300': step === 2 || step === 3 || step === lastStep
          }
        )}
      ></div>
      <div
        className={classNames(
          'h-3 w-3 rounded-full shadow absolute -top-[4px]  left-[66.6%]',
          {
            'bg-primary-200': step <= lastStep
          },
          {
            'bg-red-300': step === 3 || step === lastStep
          }
        )}
      ></div>
      {/* <div
        className={classNames(
          'h-3 w-3 rounded-full shadow absolute -top-[4px]  left-[95%]',
          {
            'bg-primary-200': step <= lastStep
          },
          {
            'bg-red-300': step === 4 || step === lastStep
          }
        )}
      ></div> */}
      <div
        className={classNames(
          'h-3 w-3 rounded-full shadow absolute -top-[4px]  right-0',
          {
            'bg-primary-200': step <= lastStep
          },
          {
            'bg-red-300': step === lastStep
          }
        )}
      ></div>
    </div>
  );
};
