import { DynamicIcon } from 'lucide-react/dynamic';

const Chip = ({ text, icon, state, onEvent }) => {
  return (
    <button
      className={
        'flex gap-1 border border-primary rounded-full px-3 py-1 text-primary items-center transition-colors duration-300 hover:bg-primary hover:text-white ' +
        (state ? 'bg-primary text-white' : '')
      }
      onClick={e => {
        e.preventDefault();
        onEvent(!state);
      }}
    >
      <div className={`-ml-1 transition-all duration-300 transform`}>
        <DynamicIcon name={icon} size={20} />
      </div>
      <span className='capitalize select-none text-sm'>{text.trim()}</span>
    </button>
  );
};

export default Chip;
