import PropTypes from 'prop-types';

const Label = ({ children, htmlFor }) => {
  const labelStyle = "text-secondary";

  return (
    <label htmlFor={htmlFor} className={labelStyle}>
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;