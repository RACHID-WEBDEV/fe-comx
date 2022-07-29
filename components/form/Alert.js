import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { XIcon } from '@/public/assets/svgsIcons';

const Alert = ({ name }) => {
  const [showAlert, setShowAlert] = React.useState(true);
  const {
    formState: { errors }
  } = useFormContext();
  const message = errors?.[name]?.message;

  return (
    <>
      {message && showAlert && (
        <div
          className={`flex items-center justify-between p-3 pr-4 mb-2 border rounded-[10px] border-red-200 bg-red-100`}
        >
          <strong className="text-sm pl-1 font-Roboto font-semibold text-red-200">{message}</strong>
          <button className="opacity-100" type="button" onClick={() => setShowAlert(false)}>
            <span className="sr-only"> Close </span>
            <XIcon width="11px" height="11px" fill="#EF4444" />
          </button>
        </div>
      )}
    </>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  setShowAlert: PropTypes.bool
};
Alert.defaultProps = {
    setShowAlert: false
};

export default Alert;
