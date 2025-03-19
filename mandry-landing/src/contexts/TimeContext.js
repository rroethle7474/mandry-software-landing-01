import { createContext } from 'react';

// Create context for time override
export const TimeOverrideContext = createContext({
  overrideHour: null,
  setOverrideHour: () => {},
}); 