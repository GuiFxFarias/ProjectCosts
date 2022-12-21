import "./Selectstyle.css";

function Select({ txt, name, options, handleOnChange, value }) {
  return (
    <div className="formControl">
      <label htmlFor={name}>{txt}: </label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
        {options.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
