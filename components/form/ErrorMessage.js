import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export function ErrorMessage({ className, name }) {
  const {
    formState: { errors, dirtyFields }
  } = useFormContext();

  // console.log('dirtystrings', dirtyFields);

  return (
    <>
      {errors?.[name] && (
        <div className={classNames('text-red-300 py-1 text-sm ', className)}>{errors?.[name]?.message}</div>
      )}
    </>
  );
}
ErrorMessage.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
};

ErrorMessage.defaultProps = {
  className: null,
  name: null
};
