import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

export const StepsProgress = (props) => {
  return (
    <ProgressBar percent={((props.step - 1) * 100) / 3} filledBackground="#D71E0E">
      <Step transition="scale">
        {({ accomplished, index }) => <div className={`step ${accomplished ? 'completed' : null}`}></div>}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => <div className={`step ${accomplished ? 'completed' : null}`}></div>}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => <div className={`step ${accomplished ? 'completed' : null}`}></div>}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => <div className={`step ${accomplished ? 'completed' : null}`}></div>}
      </Step>
    </ProgressBar>
  );
};
