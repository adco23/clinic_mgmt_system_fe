import { ENDPOINTS } from './ApiEndpoints';

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const finalOptions = { ...defaultOptions, ...options };

    try {
      const response = await fetch(url, finalOptions);
      const result = await response.json();
      console.log("result", result)
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint);
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  register(userData) {
    return this.post(ENDPOINTS.register, userData);
  }

  login(userData) {
    return this.post(ENDPOINTS.login, userData);
  }

  getRoles() {
    return this.get(ENDPOINTS.roles);
  }

  getSpecialties() {
    return this.get(ENDPOINTS.specialties);
  }

  createDoctorProfile(doctorProfile) {
    return this.post(ENDPOINTS.doctors, doctorProfile);
  }
}

const api = new ApiClient('http://localhost:3000/api');

export default api;