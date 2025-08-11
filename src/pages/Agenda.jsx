import { useState, useMemo } from 'react';
import InputTime from '../ui/InputTime';

const availableDays = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];

const Agenda = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const selectAllDays = () => {
    setSelectedDays([...availableDays]);
    setSelectedTimes(availableDays.map(day => ({
      day,
      ranges: [{ from: '', to: '' }]
    })));
  };

  const clearAllDays = () => {
    setSelectedDays([]);
    setSelectedTimes([]);
  };

  const handleDayChange = (day, isChecked) => {
    if (day === 'all') {
      return isChecked ? selectAllDays() : clearAllDays();
    }

    if (isChecked) {
      setSelectedDays(prev => [...prev, day]);
      setSelectedTimes(prev => [...prev, { day, ranges: [{ from: '', to: '' }] }]);
    } else {
      setSelectedDays(prev => prev.filter(d => d !== day));
      setSelectedTimes(prev => prev.filter(t => t.day !== day));
    }
  };

  const handleTimeChange = (day, rangeIndex, type, newValue) => {
    setSelectedTimes(prev =>
      prev.map(t =>
        t.day === day
          ? {
              ...t,
              ranges: t.ranges.map((r, i) =>
                i === rangeIndex ? { ...r, [type]: newValue } : r
              )
            }
          : t
      )
    );
  };

  const addTimeRange = day => {
    setSelectedTimes(prev =>
      prev.map(t =>
        t.day === day
          ? { ...t, ranges: [...t.ranges, { from: '', to: '' }] }
          : t
      )
    );
  };

  const removeTimeRange = day => {
    setSelectedTimes(prev =>
      prev.map(t =>
        t.day === day
          ? { ...t, ranges: t.ranges.slice(0, -1) }
          : t
      )
    );
  };

  const isAllSelected = useMemo(
    () => selectedDays.length === availableDays.length,
    [selectedDays]
  );

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Arma tu agenda</h2>
      <p className="text-center text-neutral py-3">
        Seleccioná los días en los que atendés y definí tus horarios disponibles
        para cada uno. Podés agregar más de un rango horario por día si lo necesitás.
      </p>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="w-12">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={isAllSelected}
                    onChange={({ target }) =>
                      handleDayChange('all', target.checked)
                    }
                  />
                </label>
              </th>
              <th className="w-24">Día</th>
              <th>Horarios</th>
            </tr>
          </thead>
          <tbody>
            {availableDays.map(day => {
              const timeObj = selectedTimes.find(t => t.day === day);
              const isSelected = selectedDays.includes(day);

              return (
                <tr key={day}>
                  <th>
                    <input
                      type="checkbox"
                      name={day}
                      className="checkbox"
                      checked={isSelected}
                      onChange={({ target }) =>
                        handleDayChange(day, target.checked)
                      }
                    />
                  </th>
                  <td className="font-bold">{day}</td>
                  <td className="flex gap-2">
                    <div className="flex flex-col gap-2">
                      {isSelected && timeObj?.ranges.map((range, i) => (
                        <div key={i} className="flex gap-2 items-center">
                          {/* <input
                            type="time"
                            value={range.from}
                            className="input input-xs min-w-20"
                            onChange={e =>
                              handleTimeChange(day, i, 'from', e.target.value)
                            }
                          /> */}
                          <InputTime
                            value={range.from}
                            addClasses="input-xs min-w-20"
                            onChange={(newVal) =>
                              handleTimeChange(day, i, 'from', newVal)
                            }
                          />
                          <InputTime
                            value={range.to}
                            addClasses="input-xs min-w-20"
                            onChange={(newVal) =>
                              handleTimeChange(day, i, 'to', newVal)
                            }
                            min={range.from}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      {isSelected && (
                        <button
                          className="btn btn-xs btn-outline"
                          onClick={() => addTimeRange(day)}
                        >
                          + Agregar
                        </button>
                      )}
                      {isSelected && timeObj?.ranges.length > 1 && (
                        <button
                          className="btn btn-xs btn-outline"
                          onClick={() => removeTimeRange(day)}
                        >
                          - Quitar
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button className='btn btn-primary btn-wide'>
        Guardar
      </button>
    </div>
  );
};

export default Agenda;
