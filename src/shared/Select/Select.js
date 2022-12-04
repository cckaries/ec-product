import styles from './Select.module.scss';

const Select = ({
  id,
  name,
  value,
  defaultValue,
  isDisabled = false,
  customClass,
  children,
  onChange = () => {},
}) => {
  return (
    <select
      className={customClass}
      id={id}
      name={name}
      value={value}
      defaultValue={defaultValue}
      disabled={isDisabled}
      onChange={e => onChange(e.target.value)}
    >
      {children}
    </select>
  );
};

export default Select;
