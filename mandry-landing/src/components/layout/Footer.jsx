import { useState } from 'react';
import { format } from 'date-fns';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real application, this would connect to an API
    // For now, we'll just show a success message
    setSubscriptionStatus('Thanks for subscribing!');
    setEmail('');
    
    // Clear the success message after 3 seconds
    setTimeout(() => {
      setSubscriptionStatus('');
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info and Date */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Mandry Software</h2>
            <p className="text-lg">{currentDate}</p>
          </div>

          {/* Email Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="max-w-md">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-gray-700 bg-gray-800 text-white px-4 py-2 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Subscribe
              </button>
              {subscriptionStatus && (
                <p className="text-green-400 mt-2">{subscriptionStatus}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;