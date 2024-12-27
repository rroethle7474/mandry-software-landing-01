import TimeBasedImage from '../ui/TimeBasedImage';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <TimeBasedImage
          type="hero"
          alt="Developer working at desk"
          className="w-full h-full object-cover"
          priority={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Mandry Software
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
          Creating innovative solutions for tomorrows challenges.
          Building the future of digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Hero;