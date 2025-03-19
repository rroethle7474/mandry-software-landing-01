import { useState, useEffect, useContext, useCallback } from 'react';
import { set } from 'date-fns';
import { TimeOverrideContext } from '../contexts/TimeContext.js';

export const TIME_PERIODS = {
  MORNING: 'morning',
  MIDDAY: 'midday',
  EVENING: 'evening',
  NIGHT: 'night'
};

export function useTimeOverride() {
  return useContext(TimeOverrideContext);
}

export function useTimeOfDay() {
  const [currentPeriod, setCurrentPeriod] = useState(null);
  const [nextTransition, setNextTransition] = useState(null);
  const { overrideHour } = useTimeOverride();

  // Use useCallback to memoize these functions
  const determineTimePeriod = useCallback((date) => {
    // Use overrideHour if available, otherwise use the current hour
    const hour = overrideHour !== null ? overrideHour : date.getHours();
    console.log('Current hour:', hour, overrideHour !== null ? '(overridden)' : '');
    
    // Define time ranges
    if (hour >= 4 && hour < 12) {
      return TIME_PERIODS.MORNING;
    } else if (hour >= 12 && hour < 17) {
      return TIME_PERIODS.MIDDAY;
    } else if (hour >= 17 && hour < 20) {
      return TIME_PERIODS.EVENING;
    } else {
      return TIME_PERIODS.NIGHT;
    }
  }, [overrideHour]);

  const calculateNextTransition = useCallback((currentDate) => {
    // Use overrideHour if available, otherwise use the current hour
    const hour = overrideHour !== null ? overrideHour : currentDate.getHours();
    let nextHour;

    if (hour >= 4 && hour < 12) {
      nextHour = 12; // Next transition at noon
    } else if (hour >= 12 && hour < 17) {
      nextHour = 17; // Next transition at 5 PM
    } else if (hour >= 17 && hour < 20) {
      nextHour = 20; // Next transition at 8 PM
    } else {
      nextHour = 4; // Next transition at 4 AM
    }

    // Set the next transition time
    const nextTransitionDate = set(currentDate, {
      hours: nextHour,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });

    // If the calculated time is in the past, add 24 hours
    if (nextTransitionDate < currentDate) {
      nextTransitionDate.setDate(nextTransitionDate.getDate() + 1);
    }

    return nextTransitionDate;
  }, [overrideHour]);

  useEffect(() => {
    const updateTimeOfDay = () => {
      const now = new Date();
      const period = determineTimePeriod(now);
      const nextTransitionTime = calculateNextTransition(now);

      setCurrentPeriod(period);
      setNextTransition(nextTransitionTime);

      // If there's an override, don't schedule an update
      if (overrideHour !== null) {
        return null;
      }

      // Schedule next update
      const timeUntilTransition = nextTransitionTime - now;
      return setTimeout(updateTimeOfDay, timeUntilTransition);
    };

    const timeoutId = updateTimeOfDay();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [overrideHour, determineTimePeriod, calculateNextTransition]);

  return {
    currentPeriod,
    nextTransition,
    isLoading: currentPeriod === null
  };
} 