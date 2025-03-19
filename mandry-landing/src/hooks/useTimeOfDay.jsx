import { useState } from 'react';
import PropTypes from 'prop-types';
import { TimeOverrideContext } from '../contexts/TimeContext.js';

const TimeOverrideProvider = ({ children }) => {
  const [overrideHour, setOverrideHour] = useState(null);
  
  return (
    <TimeOverrideContext.Provider value={{ overrideHour, setOverrideHour }}>
      {children}
    </TimeOverrideContext.Provider>
  );
};

TimeOverrideProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TimeOverrideProvider;