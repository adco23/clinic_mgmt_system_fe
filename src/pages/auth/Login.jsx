import { useState } from 'react';
import API from '../../config/ApiClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const login = await API.login({ email, password });

      alert(login.message);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='card w-full max-w-md center'>
      <h2 className='text-4xl font-bold text-center'>Iniciar Sesión</h2>
      <p className='text-center text-neutral py-3'>
        Ingresa tus credenciales para acceder a tu cuenta
      </p>

      <form onSubmit={handleSubmit}>
        <div className='fieldset'>
          <legend className='fieldset-legend'>Correo Electrónico</legend>
          <input
            type='email'
            value={email}
            placeholder='tu@ejemplo.com'
            className='input w-full input-primary'
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>

        <div className='fieldset'>
          <div className='flex justify-between items-center'>
            <legend className='fieldset-legend'>Contraseña</legend>
            <a href='#' className='link'>
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <input
            type='password'
            value={password}
            className='input w-full input-primary'
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>

        <div className='card-actions justify-end mt-6'>
          <button
            type='submit'
            className='btn btn-primary w-full'
            disabled={!email || !password || isLoading}
          >
            {!isLoading ? 'Iniciar Sesión' : 'Cargando...'}
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
