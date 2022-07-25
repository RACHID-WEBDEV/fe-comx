import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import { Label } from '.';

const Checkbox = ({ label, name, value }) => {
  const { register } = useFormContext();
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        {...register(name)}
        value={value}
        id={`checkbox-${name}-${value.toString()}`}
        className="w-4 h-4 text-red-200 bg-primary-100 rounded border-primary-300 "
      />
      <Label className="pl-2" htmlFor={`checkbox-${name}-${value.toString()}`} text={label} />
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
  value: PropTypes.bool
};
Checkbox.defaultProps = {
  label: null,
  name: '',
  value: false
};

export default Checkbox;
