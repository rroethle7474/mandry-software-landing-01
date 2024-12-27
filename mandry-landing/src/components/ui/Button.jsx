import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="px-4 py-2 bg-purple-600 text-white rounded">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;