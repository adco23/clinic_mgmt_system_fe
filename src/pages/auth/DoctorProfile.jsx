import { useState } from 'react';
import Chip from '../../ui/Chip';

const DoctorProfile = () => {
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    specialty: '',
  });

  return (
    <div className='card w-full max-w-md center'>
      <h2 className='text-4xl font-bold text-center'>Arma tu perfil</h2>
      <p className='text-center text-neutral py-3'>
        Ingresa la información para mostrar a tus pacientes.
      </p>

      <form>
        <div className='fieldset'>
          <legend className='fieldset-legend'>Nombres</legend>
          <input
            type='text'
            name='firstName'
            value={form.firstName}
            onChange={({ target }) =>
              setForm({ ...form, [target.name]: target.value })
            }
            className='input w-full'
            required
          />
        </div>

        <div className='fieldset'>
          <legend className='fieldset-legend'>Apellidos</legend>
          <input
            type='text'
            name='lastName'
            value={form.lastName}
            onChange={({ target }) =>
              setForm({ ...form, [target.name]: target.value })
            }
            className='input w-full'
            required
          />
        </div>

        <div className='fieldset'>
          <div className='flex justify-between items-center'>
            <legend className='fieldset-legend'>Especialidad</legend>
          </div>
          <select
            name='specialty'
            value={form.role}
            onChange={({ target }) =>
              setForm({ ...form, [target.name]: target.value })
            }
            className='select w-full capitalize'
          >
            <option disabled></option>
            {/* {roles.length > 0 &&
              roles.map(role => (
                <option key={role.id} value={role.name} className='capitalize'>
                  {role.name}
                </option>
              ))} */}
          </select>
        </div>

        <div className='fieldset flex gap-2'>
          <legend className='fieldset-legend'>Otros</legend>
          <Chip
            text='teléfono'
            key='teléfono'
            icon={phone ? 'check' : 'plus'}
            onEvent={setPhone}
            state={phone}
          />
          <Chip
            text='correo'
            key='correo'
            icon={email ? 'check' : 'plus'}
            onEvent={setEmail}
            state={email}
          />
        </div>

        {phone ? (
          <div className='fieldset'>
            <div className='flex justify-between items-center'>
              <legend className='fieldset-legend'>Teléfono</legend>
            </div>
            <input
              type='number'
              name='phone'
              value={form.phone}
              onChange={({ target }) =>
                setForm({ ...form, [target.name]: target.value })
              }
              className='input w-full'
            />
          </div>
        ) : null}

        {email ? (
          <div className='fieldset'>
            <div className='flex justify-between items-center'>
              <legend className='fieldset-legend'>Correo</legend>
            </div>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={({ target }) =>
                setForm({ ...form, [target.name]: target.value })
              }
              className='input w-full'
            />
          </div>
        ) : null}

        <div className='card-actions justify-end mt-6'>
          <button
            type='submit'
            className='btn w-full btn-primary'
            disabled={!form.firstName || !form.lastName || !form.specialty}
          >
            Crear perfil
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorProfile;
