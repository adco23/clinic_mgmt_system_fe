export const ENDPOINTS = {
  // Endpoints para usuarios
  users: `/users`,
  userById: id => `/users/${id}`,

  // Endpoints para productos
  products: `/products`,
  productById: id => `/products/${id}`,

  // Endpoints de autenticación
  login: `/auth/login`,
  register: `/auth/register`,
  roles: '/auth/roles',
};
