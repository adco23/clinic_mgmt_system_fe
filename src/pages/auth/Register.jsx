import { useEffect, useState } from 'react';
import { api } from '../../config/ApiClient';

const Register = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await api.getRoles();

      setRoles(result.data);
      setLoading(false);
    } catch (error) {
      setApiError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading data...</div>;
  if (apiError) return <div>Error: {apiError.message}</div>;

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    // const url = 'http://localhost:3000/api/auth/register';
    // const config = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(input),
    // };

    try {
      // const response = await fetch(url, config);
      // const result = await response.json();

      const result = await api.register(input);
      setInput({
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
      });
      alert(result.message);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='card w-full max-w-md center'>
      <h2 className='text-4xl font-bold text-center'>Crear una cuenta</h2>
      <p className='text-center text-neutral py-3'>
        ¿Ya tienes una cuenta?{' '}
        <a href='/auth' className='link'>
          Inicia sesión
        </a>
      </p>

      <form onSubmit={handleSubmit}>
        <div className='fieldset'>
          <legend className='fieldset-legend'>Correo Electrónico</legend>
          <input
            type='email'
            name='email'
            value={input.email}
            onChange={({ target }) =>
              setInput({ ...input, [target.name]: target.value })
            }
            placeholder='tu@ejemplo.com'
            className='input w-full'
            required
          />
        </div>

        <div className='fieldset'>
          <div className='flex justify-between items-center'>
            <legend className='fieldset-legend'>Contraseña</legend>
          </div>
          <input
            type='password'
            name='password'
            value={input.password}
            onChange={({ target }) =>
              setInput({ ...input, [target.name]: target.value })
            }
            className='input w-full'
            required
          />
        </div>

        <div className='fieldset'>
          <div className='flex justify-between items-center'>
            <legend className='fieldset-legend'>Confirmar Contraseña</legend>
          </div>
          <input
            type='password'
            name='confirmPassword'
            value={input.confirmPassword}
            onChange={({ target }) =>
              setInput({ ...input, [target.name]: target.value })
            }
            className='input w-full'
            required
          />
        </div>

        <div className='fieldset'>
          <div className='flex justify-between items-center'>
            <legend className='fieldset-legend'>Rol</legend>
          </div>
          <select
            name='role'
            value={input.role}
            onChange={({ target }) =>
              setInput({ ...input, [target.name]: target.value })
            }
            className='select w-full capitalize'
          >
            <option disabled></option>
            {roles.length > 0 &&
              roles.map(role => (
                <option key={role.id} value={role.name} className='capitalize'>
                  {role.name}
                </option>
              ))}
          </select>
        </div>

        <div className='card-actions justify-end mt-6'>
          <button
            type='submit'
            className='btn w-full btn-primary'
            disabled={
              !input.email ||
              !input.password ||
              !input.confirmPassword ||
              !input.role
            }
          >
            Iniciar Sesión
          </button>
        </div>
      </form>

      <div>
        <p className='font-semibold text-xl mb-4 mt-8'>
          “En nuestra clínica, la salud de nuestros pacientes es nuestra
          prioridad. Ofrecemos atención de calidad con un equipo dedicado y
          profesional.“
        </p>
        <p className='font-semibold text-lg'>Clínica Salud Integral</p>
        <p className='text-neutral'>Tu bienestar, nuestra misión.</p>
      </div>
    </div>
  );
};

export default Register;
