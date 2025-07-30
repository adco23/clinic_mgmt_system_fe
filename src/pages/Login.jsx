import React from 'react';

const Login = () => {
  return (
    <div className='card w-full max-w-md center'>
      <h2 className='text-4xl font-bold text-center'>Iniciar Sesión</h2>
      <p className='text-center text-neutral py-3'>
        Ingresa tus credenciales para acceder a tu cuenta
      </p>

      <form>
        <div className='fieldset'>
          <legend className='fieldset-legend'>Correo Electrónico</legend>
          <input
            type='email'
            placeholder='tu@ejemplo.com'
            className='input w-full input-primary'
            required
          />
        </div>

        <div className='fieldset'>
          <div className='flex justify-between items-center'>
            <legend className='fieldset-legend'>Contraseña</legend>
            <a href='#' className='link'>¿Olvidaste tu contraseña?</a>
          </div>
          <input
            type='password'
            className='input w-full input-primary'
            required
          />
        </div>

        <div className='card-actions justify-end mt-6'>
          <button type='submit' className='btn btn-primary w-full'>
            Iniciar Sesión
          </button>
        </div>
      </form>

      <div className='text-center mt-4'>
        ¿No tienes una cuenta?{' '}
        <a href='/auth/register' className='link'>
          Regístrate
        </a>
      </div>
    </div>
  );
};

export default Login;
