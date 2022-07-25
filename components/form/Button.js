import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ className, children, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'text-sm font-bold focus:outline-none border rounded-[2px] py-3 w-full',
        { 'bg-green-100 hover:bg-black-400 text-white': color === 'primary' },
        { 'hover:bg-green-100 bg-black-400 text-white': color === 'secondary' },
        { 'bg-white border-primary-200 text-black-300 hover:bg-green-100 hover:text-white': color === 'teritary' },

        className
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  color: 'primary',
  className: null,
  onClick: () => {}
};

export default Button;
