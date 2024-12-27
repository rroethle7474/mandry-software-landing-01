import PropTypes from 'prop-types';
import TimeBasedImage from '../ui/TimeBasedImage';

const Logo = ({ className = '' }) => {
  console.log('Logo rendering with className:', className);
  
  return (
    <div className={`w-12 h-12 ${className}`}>
      <TimeBasedImage
        type="logo"
        alt="Mandry Software Logo"
        className="w-full h-full"
        priority={true}
      />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;