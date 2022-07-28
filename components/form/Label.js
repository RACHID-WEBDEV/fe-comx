import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Label = ({ className, htmlFor, text }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames('cursor-pointer text-sm font-Roboto text-black-300 font-medium', className)}
    >
      {text}
    </label>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.node
};

Label.defaultProps = {
  className: null,
  htmlFor: null,
  text: null
};

export default Label;
