import React from 'react';
import PropTypes from 'prop-types';
import { Label, ErrorMessage } from '.';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import { SelectArrowIcon } from '@/public/assets/svgsIcons';
export function SelectField({ children, className, containerClassName, label, name }) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const hasErrors = !!errors?.[name];

  return (
    <>
      {label && <Label className="text-base" name={name} htmlFor={name} text={label} />}
      <div className={classNames('relative z-0 mb-2 w-full group', containerClassName)}>
        <select
          id={name}
          {...register(name)}
          className={classNames(
            'block py-3.5 px-3 w-full text-sm mt-1 appearance-none transition ease-in-out bg-secondary-25 border-primary-200 border rounded-[2px] focus:outline-none focus:ring-0 peer',
            className,
            { 'focus:border-red-300': hasErrors },
            { 'focus:border-primary-300': !hasErrors }
          )}
        >
          {children}
        </select>

        <div className={classNames('absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none')}>
          <SelectArrowIcon />
        </div>
      </div>
    </>
  );
}

SelectField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  label: PropTypes.string,
  name: PropTypes.string.isRequired
};

SelectField.defaultProps = {
  className: null,
  label: null
};

const Select = ({ defaultOption, label, name, options }) => {
  return (
    <>
      <SelectField label={label ? label : ''} name={name}>
        {defaultOption && (
          <option key={name} value="">
            {defaultOption}
          </option>
        )}
        {options.map(({ title, value }, id) => {
          if (!value || !title) return null;
          const optionTitle = title || value;
          const optionValue = value || title;
          return (
            <option key={id} value={optionValue}>
              {optionTitle}
            </option>
          );
        })}
      </SelectField>
      <ErrorMessage name={name} />
    </>
  );
};

export default Select;

Select.propTypes = {
  defaultOption: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array
};

Select.defaultProps = {
  defaultOption: null,
  label: null,
  options: []
};
