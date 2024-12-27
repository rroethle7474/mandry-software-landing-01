// src/services/subscriptionService.js
import apiService from './api';

/**
 * Service for handling email subscriptions
 */
class SubscriptionService {
  /**
   * Subscribe an email to the newsletter
   * @param {string} email 
   * @returns {Promise<Object>}
   */
  async subscribe(email) {
    try {
      return await apiService.post('/subscriptions', { email });
    } catch (error) {
      console.error('Subscription error:', error);
      throw error;
    }
  }

  /**
   * Unsubscribe an email from the newsletter
   * @param {string} email 
   * @returns {Promise<Object>}
   */
  async unsubscribe(email) {
    try {
      return await apiService.delete(`/subscriptions/${encodeURIComponent(email)}`);
    } catch (error) {
      console.error('Unsubscribe error:', error);
      throw error;
    }
  }
}

export default new SubscriptionService();