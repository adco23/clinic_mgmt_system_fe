import { useState } from 'react';

const Agenda = () => {
  const [ selectedDays, setSelectedDays ] = useState([]);
  const days = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];

  return (
    // <div className='card w-full max-w-md center'>
    <div className=''>
      <h2 className='text-4xl font-bold text-center'>Arma tu agenda</h2>
      <p className='text-center text-neutral py-3'>
        Seleccioná los días en los que atendés y definí tus horarios disponibles
        para cada uno. Podés agregar más de un rango horario por día si lo
        necesitás.
      </p>

      <fieldset className='fieldset bg-base-100 border-base-300 rounded-box border p-4'>
        <legend className='fieldset-legend'>Seleccioná los días en los que estás disponible para atender.</legend>
        {
          days.map((day, i) => (
          <label className='label' key={i}>
            <input type='checkbox' className='checkbox' onChange={({ target }) => {
              if (target.checked) {
                setSelectedDays([...selectedDays, day].sort((a, b) => days.indexOf(a) - days.indexOf(b)));
              } else {
                setSelectedDays(selectedDays.filter(d => d !== day).sort((a, b) => days.indexOf(a) - days.indexOf(b)));
              }
            }}/>
            {day}
          </label>))
        }
        
      </fieldset>

      <fieldset className='fieldset bg-base-100 border-base-300 rounded-box border p-4'>
        <legend className='fieldset-legend'>Definí los horarios para cada día. Podés agregar más de un rango por día si lo necesitás.</legend>
        {
          selectedDays.map((day, i) => (
            <div key={i} className='flex gap-4'>
              <label className=''>{day}</label>
              <div className='flex gap-2 mb-4'>
                <input type='time' className='input input-bordered w-24' />
                <span className='self-center'>a</span>
                <input type='time' className='input input-bordered w-24' />
                <button className='btn btn-square btn-outline'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </button>
              </div>
            </div>
          ))
        }
        <table className='table'>
          <tbody>
            {
              selectedDays.map((day, i) => (
                <tr key={i}>
                  <th>{day}</th>
                  <td>
                    <input type='time' className='input'/>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        
      </fieldset>
    </div>
  );
};

export default Agenda;
