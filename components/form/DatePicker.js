import React from 'react';
import { DatePicker } from 'rsuite';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '.';
import PropTypes from 'prop-types';
import Label from './Label';

const Datepicker = ({ name, label, placeholder }) => {
  const { control } = useFormContext();
  return (
    <>
      {label && <Label name={name} htmlFor={name} text={label} />}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            size="lg"
            oneTap
            format="dd-MM-yyyy"
            isoWeek
            appearance="default"
            placeholder={placeholder}
            style={{ width: '100%' }}
            value={field.value}
            onChange={(e) => field.onChange(e)}
          />
        )}
      />
      <ErrorMessage name={name} className="mt-2" />
    </>
  );
};

Datepicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

Datepicker.defaultProps = {
  label: null,
  placeholder: null
};

export default Datepicker;
