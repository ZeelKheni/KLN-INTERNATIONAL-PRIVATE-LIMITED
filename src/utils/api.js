import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Check if the data is FormData and remove Content-Type to let browser set it
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access      
      // TODO: Redirect to server error page when we have one
      window.location.href = '/server-error';
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

// API endpoints
export const endpoints = {
  products: {
    getAll: () => api.get('/products'),
  },
  categories: {
    getAll: () => api.get('/categories'),
    getFiltered: (type = 'both') => api.get(`/categories/filter?type=${type}`),
  },
  inquiries: {
    create: (data) => api.post('/inquiries', data),
  },
  brochures: {
    getAll: () => api.get('/brochures'),
  },
  certificates: {
    getAll: () => api.get('/certificates'),
  },
  suppliers: {
    getAll: () => api.get('/suppliers'),
    getById: (id) => api.get(`/suppliers/${id}`),
  },
  team: {
    getAll: (params) => api.get('/team', { params }),
    getById: (id) => api.get(`/team/${id}`),
    create: (data) => api.post('/team', data),
    update: (id, data) => api.put(`/team/${id}`, data),
    delete: (id) => api.delete(`/team/${id}`),
  },
  socialLinks: {
    getAll: () => api.get('/social-links'),
    getById: (id) => api.get(`/social-links/${id}`),
    create: (data) => api.post('/social-links', data),
    update: (id, data) => api.put(`/social-links/${id}`, data),
    delete: (id) => api.delete(`/social-links/${id}`),
  },
};

// Export both api instance and endpoints
export { api as default }; 