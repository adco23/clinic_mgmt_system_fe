export const ENDPOINTS = {
  // Usuarios
  users: `/users`,
  userById: id => `/users/${id}`,

  // Autenticación
  login: `/auth/login`,
  register: `/auth/register`,
  roles: '/auth/roles',

  // Especialidades
  specialties: '/specialties',

  // Doctores
  doctors: '/doctors'
};
