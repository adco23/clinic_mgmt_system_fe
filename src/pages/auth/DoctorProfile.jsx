import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import API from '../../config/ApiClient';
import Chip from '../../ui/Chip';

const DoctorProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  const [specialties, setSpecialties] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    specialty: '',
  });

  useEffect(() => {
    getIdFromStorage();
    fetchData();
  }, []);

  const getIdFromStorage = () => {
    let item = localStorage.getItem('userId');

    Number(item)
      ? setUser(Number(item))
      : alert('Previamente debes dar de alta un usuario.');
  };

  const fetchData = async () => {
    try {
      const result = await API.getSpecialties();

      setSpecialties(result.data);
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

    console.log("send:", {userId: user, ...form})
    setLoading(true);
    try {
      const result = await API.createDoctorProfile({userId: user, ...form});
      alert(result.message);
    } catch (error) {
      console.error(error.message);
    } finally {
      setForm({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        specialty: '',
      });
      localStorage.removeItem('userId');
      setLoading(false);
    }
  };

  return (
    <div className='card w-full max-w-md center'>
      <h2 className='text-4xl font-bold text-center'>Arma tu perfil</h2>
      <p className='text-center text-neutral py-3'>
        Ingresa la información para mostrar a tus pacientes.
      </p>

      <form onSubmit={handleSubmit}>
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
            value={form.specialty}
            onChange={({ target }) =>
              setForm({ ...form, [target.name]: target.value })
            }
            className='select w-full capitalize'
          >
            <option disabled></option>
            {specialties.length > 0 &&
              specialties.map(specialty => (
                <option
                  key={specialty.id}
                  value={specialty.name}
                  className='capitalize'
                >
                  {specialty.name}
                </option>
              ))}
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
