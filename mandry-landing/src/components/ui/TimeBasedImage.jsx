import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTimeOfDay } from '../../hooks/timeUtils.js';
import { Loader } from 'lucide-react';

const TimeBasedImage = ({ 
  type, 
  className = '',
  alt,
  priority = false 
}) => {
  const { currentPeriod } = useTimeOfDay();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentPeriod) {
      setIsImageLoading(true);
    }
  }, [currentPeriod]);

  if (!currentPeriod) {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader className="w-8 h-8 text-purple-500 animate-spin" />
        </div>
      </div>
    );
  }

  // Determine image paths
  const size = type === 'hero' ? (window.innerWidth >= 640 ? 'large' : 'small') : '';
  const sizePrefix = size ? `-${size}` : '';
  const webpPath = `/images/${type}/${type}-${currentPeriod}${sizePrefix}.webp`;
  const pngPath = `/images/${type}/${type}-${currentPeriod}${sizePrefix}.png`;

  console.log('Rendering with paths:', { webpPath, pngPath });

  return (
    <div className={`relative ${className}`}>
      {isImageLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <Loader className="w-8 h-8 text-purple-500 animate-spin" />
        </div>
      )}
      <picture className={isImageLoading ? 'opacity-0' : 'opacity-100'}>
        <source srcSet={webpPath} type="image/webp" />
        <img
          src={pngPath}
          alt={alt}
          className="w-full h-full object-cover transition-opacity duration-500"
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => {
            console.log('Image loaded:', pngPath);
            setIsImageLoading(false);
          }}
          onError={(e) => {
            console.error('Image load error:', e);
            setError('Failed to load image');
            setIsImageLoading(false);
          }}
        />
      </picture>
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-red-400">
          <p className="text-center px-4">{error}</p>
        </div>
      )}
    </div>
  );
};

TimeBasedImage.propTypes = {
  type: PropTypes.oneOf(['logo', 'hero']).isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  priority: PropTypes.bool
};

export default TimeBasedImage;