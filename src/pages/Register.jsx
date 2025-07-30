import React from 'react';

const Register = () => {
  return (
    <div className='card w-full max-w-md center'>
      <h2 className='text-4xl font-bold text-center'>Crear una cuenta</h2>
      <p className='text-center text-neutral py-3'>
        ¿Ya tienes una cuenta? Inicia sesión
      </p>

      <form>
        <div className='fieldset'>
          <legend className='fieldset-legend'>Nombre Completo</legend>
          <input
            type='text'
            name='fullname'
            placeholder='Tu nombre'
            className='input w-full'
            required
          />
        </div>

        <div className='fieldset'>
          <legend className='fieldset-legend'>Correo Electrónico</legend>
          <input
            type='email'
            name='email'
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
            className='input w-full'
            required
          />
        </div>

        <div className='fieldset'>
          <div className='flex justify-between items-center'>
            <legend className='fieldset-legend'>Rol</legend>
          </div>
          <select name='role' className='select w-full'>
            <option disabled></option>
            <option value=''>A</option>
            <option value=''>B</option>
            <option value=''>C</option>
          </select>
        </div>

        <div className='card-actions justify-end mt-6'>
          <button type='submit' className='btn w-full'>
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
