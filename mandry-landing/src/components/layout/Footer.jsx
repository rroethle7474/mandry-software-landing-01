import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { useTimeOverride } from '../../hooks/timeUtils.js';
import { Sun, Moon, Sunrise, Sunset } from 'lucide-react';

const formatHourDisplay = (hour) => {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12; // Convert 0 to 12 for 12 AM
  return `${displayHour}:00 ${period}`;
};

const getTimeOfDayLabel = (hour) => {
  if (hour >= 4 && hour < 12) {
    return 'Morning';
  } else if (hour >= 12 && hour < 17) {
    return 'Midday';
  } else if (hour >= 17 && hour < 20) {
    return 'Evening';
  } else {
    return 'Night';
  }
};

const getTimeIcon = (hour) => {
  if (hour >= 4 && hour < 12) {
    return <Sunrise className="w-5 h-5 mr-2 text-yellow-400" />;
  } else if (hour >= 12 && hour < 17) {
    return <Sun className="w-5 h-5 mr-2 text-yellow-500" />;
  } else if (hour >= 17 && hour < 20) {
    return <Sunset className="w-5 h-5 mr-2 text-orange-500" />;
  } else {
    return <Moon className="w-5 h-5 mr-2 text-blue-400" />;
  }
};

const TimeSlider = () => {
  const { setOverrideHour } = useTimeOverride();
  const [sliderValue, setSliderValue] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  
  // Initialize the slider with the current hour when component mounts
  useEffect(() => {
    if (sliderValue === null) {
      const currentHour = new Date().getHours();
      setSliderValue(currentHour);
    }
  }, [sliderValue]);

  const handleSliderChange = (e) => {
    const hour = parseInt(e.target.value, 10);
    setSliderValue(hour);
    setOverrideHour(hour);
  };

  const handleResetClick = () => {
    setOverrideHour(null);
    setSliderValue(new Date().getHours());
  };

  // Don't render until we have a valid slider value
  if (sliderValue === null) return null;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-white">Time of Day</h3>
        <button 
          onClick={handleResetClick}
          className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200 px-3 py-1 rounded-full hover:bg-purple-900/50"
        >
          Reset to Current Time
        </button>
      </div>
      
      <div className="flex items-center mb-3 bg-gray-800/50 p-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
        {getTimeIcon(sliderValue)}
        <span className="text-lg font-medium">
          {formatHourDisplay(sliderValue)} - {getTimeOfDayLabel(sliderValue)}
        </span>
      </div>
      
      <div className="relative pt-1">
        {/* Slider track */}
        <div 
          className={`w-full h-3 bg-gradient-to-r from-indigo-900 via-purple-600 to-indigo-900 rounded-lg mb-2 ${isDragging ? 'opacity-100' : 'opacity-70'}`}
        ></div>
        
        {/* Standard HTML range input - this is what actually handles the interactions */}
        <input
          ref={sliderRef}
          type="range"
          min="0"
          max="23"
          value={sliderValue}
          onChange={handleSliderChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="absolute top-0 w-full h-5 appearance-none bg-transparent cursor-pointer opacity-100 z-10"
          style={{ 
            // Make the slider more visible while keeping our custom design
            opacity: 0.01, 
            // Ensure the range input is selectable
            WebkitAppearance: 'none',
            // Ensure proper height for touch targets
            height: '1.5rem',
          }}
        />
        
        {/* Custom slider thumb */}
        <div 
          className="pointer-events-none absolute top-0 w-4 h-4 bg-purple-500 rounded-full shadow-lg transition-all duration-200 transform hover:scale-125"
          style={{ 
            left: `calc(${(sliderValue / 23) * 100}% - ${(sliderValue / 23) * 16}px)`,
            marginTop: '-2px',
            border: '2px solid white',
            boxShadow: isDragging ? '0 0 8px 3px rgba(139, 92, 246, 0.7)' : '0 0 5px 0px rgba(139, 92, 246, 0.4)'
          }}
        ></div>
        
        <div className="flex justify-between text-xs text-gray-400 px-1 mt-4">
          <span>12 AM</span>
          <span>6 AM</span>
          <span>12 PM</span>
          <span>6 PM</span>
          <span>11 PM</span>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-400 text-center">
        Move the slider to see how the site changes based on the time of day
      </div>
    </div>
  );
};

const Footer = () => {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info and Date */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Mandry Software</h2>
            <p className="text-lg">{currentDate}</p>
          </div>

          {/* Time of Day Slider */}
          <div className="space-y-4">
            <TimeSlider />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;