import StepOne from '@/components/individual/RegisterStepOne';
import StepTwo from '@/components/individual/RegisterStepTwo';
import StepThree from '@/components/individual/RegisterStepThree';
import StepComplete from '@/components/individual/RegistionComplete';

const data = [
  {},
  {
    id: 1,
    label: 'Quick Start',
    content: <StepOne />
  },
  {
    id: 2,
    label: 'Step Two',
    content: <StepThree />
  },
  {
    id: 3,
    label: 'Step Three',
    content: <StepTwo />
  },
  {
    id: 4,
    label: 'Step Three',
    content: <StepComplete />
  }
];

export default data;
