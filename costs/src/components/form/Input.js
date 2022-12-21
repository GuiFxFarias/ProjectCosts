import "./InputStyle.css";

function Input({ type, txt, name, placeholder, handleOnChange, value }) {
  return (
    <div className="formControl">
      <label htmlFor={name}>{txt}: </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Input;
