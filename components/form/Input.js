import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ShowPasswordIcon, HidePasswordIcon } from '@/public/signUp/passwordSvgs';

import { Label, ErrorMessage } from '.';
import classNames from 'classnames';

const Input = ({ className, children, Icon, name, placeholder, label, type, validation }) => {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const PasswordIcon = showPassword ? (
    <HidePasswordIcon width="18px" height="18px" fill="#A9ABAD" onClick={handleShowPassword} />
  ) : (
    <ShowPasswordIcon width="18px" height="18px" fill="#A9ABAD" onClick={handleShowPassword} />
  );
  const isPasswordField = type === 'password';
  const inputIcon = isPasswordField ? PasswordIcon : Icon;

  const hasErrors = !!errors?.[name] && !!dirtyFields?.[name];

  //&& console.log('validation', validation);
  // console.log('dirtyFields', !!dirtyFields?.[name]);
  console.log('gettValues', !!getValues(name));
  console.log('hasErrors', hasErrors);
  console.log('hasvalidation?.includes(name)', validation?.includes(name));
  console.log('!!errors?.[name]', !!errors?.[name]);
  console.log('name', name);

  return (
    <>
      {label && (
        <div className="mb-2">
          <Label htmlFor={name} text={label} />
        </div>
      )}
      <div className="flex items-center gap-2">
        {children}
        <div className="relative z-0 mb-1 w-full group">
          <input
            placeholder={placeholder ? placeholder : label}
            type={isPasswordField ? (showPassword ? 'text' : 'password') : type}
            id={name}
            {...register(name)}
            className={classNames(
              'block py-3.5 px-3 w-full text-sm text-primary-300 bg-white border rounded border-primary-200 appearance-none focus:outline-none focus:ring-0 peer',
              className,
              { 'focus:border-red-300': hasErrors },
              { 'focus:border-primary-300': !hasErrors }
            )}
          />
          {inputIcon && (
            <div className={classNames('absolute pr-3 inset-y-0 right-0 flex items-center cursor-pointer')}>
              {inputIcon}
            </div>
          )}
        </div>
      </div>

      {hasErrors && <ErrorMessage name={name} />}
    </>
  );
};
Input.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string
  }),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  label: null,
  type: 'text',
  placeholder: null,
  Icon: null
};
export default Input;
