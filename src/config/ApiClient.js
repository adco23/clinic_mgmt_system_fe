import { ENDPOINTS } from "./ApiEndpoints";

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        // Aquí puedes agregar un token de autenticación si lo necesitas
        // 'Authorization': `Bearer ${this.token}`,
      },
    };

    const finalOptions = { ...defaultOptions, ...options };

    try {
      const response = await fetch(url, finalOptions);
      return await response.json();
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
}

export const api = new ApiClient('http://localhost:3000/api');