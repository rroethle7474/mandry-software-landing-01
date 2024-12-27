// src/services/api.js

/**
 * Configuration for API requests
 */
const API_CONFIG = {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
    defaultHeaders: {
      'Content-Type': 'application/json',
      // Add any default headers here
    },
    timeout: 30000, // 30 seconds
  };
  
  /**
   * Custom error class for API errors
   */
  export class APIError extends Error {
    constructor(message, status, data) {
      super(message);
      this.name = 'APIError';
      this.status = status;
      this.data = data;
    }
  }
  
  /**
   * Base API service class
   */
  export class APIService {
    constructor(config = {}) {
      this.config = {
        ...API_CONFIG,
        ...config,
      };
    }
  
    /**
     * Builds the full URL for an API request
     */
    buildURL(endpoint) {
      return `${this.config.baseURL}${endpoint}`;
    }
  
    /**
     * Merges default headers with request-specific headers
     */
    buildHeaders(customHeaders = {}) {
      return {
        ...this.config.defaultHeaders,
        ...customHeaders,
      };
    }
  
    /**
     * Processes the API response
     */
    async handleResponse(response) {
      const contentType = response.headers.get('content-type');
      let data;
  
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }
  
      if (!response.ok) {
        throw new APIError(
          data.message || 'API request failed',
          response.status,
          data
        );
      }
  
      return data;
    }
  
    /**
     * Makes an HTTP request
     */
    async request(endpoint, options = {}) {
      const {
        method = 'GET',
        headers = {},
        body,
        params = {},
        timeout = this.config.timeout,
      } = options;
  
      // Build URL with query parameters
      const url = new URL(this.buildURL(endpoint));
      Object.keys(params).forEach(key => 
        url.searchParams.append(key, params[key])
      );
  
      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
  
      try {
        const response = await fetch(url.toString(), {
          method,
          headers: this.buildHeaders(headers),
          body: body ? JSON.stringify(body) : null,
          credentials: 'include', // Enables sending cookies in cross-origin requests
          signal: controller.signal,
        });
  
        clearTimeout(timeoutId);
        return await this.handleResponse(response);
      } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
          throw new APIError('Request timeout', 408);
        }
        
        throw new APIError(error.message, 500);
      }
    }
  
    // HTTP method helpers
    async get(endpoint, options = {}) {
      return this.request(endpoint, { ...options, method: 'GET' });
    }
  
    async post(endpoint, data, options = {}) {
      return this.request(endpoint, {
        ...options,
        method: 'POST',
        body: data,
      });
    }
  
    async put(endpoint, data, options = {}) {
      return this.request(endpoint, {
        ...options,
        method: 'PUT',
        body: data,
      });
    }
  
    async patch(endpoint, data, options = {}) {
      return this.request(endpoint, {
        ...options,
        method: 'PATCH',
        body: data,
      });
    }
  
    async delete(endpoint, options = {}) {
      return this.request(endpoint, { ...options, method: 'DELETE' });
    }
  }
  
  // Create and export a default instance
  const apiService = new APIService();
  export default apiService;