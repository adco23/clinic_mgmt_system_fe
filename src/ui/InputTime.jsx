import React, { useRef, useEffect, useState } from 'react';

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  ).map(i => (i < 10 ? `0${i}` : `${i}`));

/**
 * InputTime - Selector de hora y minutos.
 * Props:
 *  - *value*: string con formato HH:mm (ej: "14:30")
 *  - *onChange*: función que recibe el nuevo valor HH:mm
 *  - *addClasses*: clases extra opcionales para el botón
 */
const InputTime = ({ value, onChange, addClasses = '', min}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const [hour, minute] = !value ? ['--', '--'] : value.split(':');

  const [minH, minM] = !min ? [0, 0] : min.split(':');

  const handleChange = (type, val) => {
    const newHour = type === 'hour' ? val : hour;
    const newMinute = type === 'minute' ? val : minute;
    onChange(`${newHour}:${newMinute}`);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open]);

  return (
    <div className='dropdown' ref={containerRef}>
      <button
        className={`btn ${addClasses}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup='listbox'
      >
        {`${hour}:${minute}`}
      </button>

      {open && (
        <div className='dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm flex gap-2'>
          {/* Horas */}
          <ul className='w-1/2 h-44 overflow-y-scroll time-value'>
            {range(Number(minH), 24, 1).map(elto => (
              <li key={elto} className='w-full'>
                <button
                  type='button'
                  className={`btn w-full btn-sm btn-ghost ${hour === elto ? 'btn-active' : ''}`}
                  onClick={() => handleChange('hour', elto)}
                >
                  {elto}
                </button>
              </li>
            ))}
          </ul>

          {/* Minutos */}
          <ul className='w-1/2 h-44 overflow-y-scroll time-value'>
            {range(hour === minH ? (Number(minM) + 15) : 0, 60, 15).map(elto => (
              <li key={elto} className='w-full'>
                <button
                  type='button'
                  className={`btn w-full btn-sm btn-ghost ${minute === elto ? 'btn-active' : ''}`}
                  onClick={() => handleChange('minute', elto)}
                >
                  {elto}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputTime;
