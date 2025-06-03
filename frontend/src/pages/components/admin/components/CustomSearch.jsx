import { useState, useEffect } from "react";

const CustomSearch = ({
  label,
  value,
  setValue,
  placeholder,
  setFilteredArray,
  filteredArray,
  data,
}) => {
  const [focus, setFocus] = useState(false);
  const [clicked, setClicked] = useState(false);

  const updateOptions = (value) => {
    const filtered =
      data?.filter((values) =>
        values?.toLowerCase()?.includes(value?.toLowerCase())
      ) || [];
    setFilteredArray(filtered.length === 0 ? [value] : filtered);
    // setFocus(filtered.length !== 0);
  };

  return (
    <div className="mb-3 position-relative p-0" >
      {/* Label */}
      <label htmlFor={label} className="form-label">
        {label}
      </label>

      {/* Input */}
      <input
        type="text"
        className="form-control"
        id={label}
        name={label}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          updateOptions(e.target.value);
          setValue(e.target.value);
        }}
        onFocus={() => setFocus(true)}
        // onBlur={() => clicked? () => {setClicked(false); setFocus(false)}: setTimeout(() => {setFocus(false)}, 1000)}
        autoComplete="off"
      />

      {/* Dropdown */}
      {focus ? (
        <div
          role="radiogroup"
          className="position-absolute w-50 bg-light rounded z-1"
        >
          {filteredArray?.map((option, index) => (
            <span
              key={option + index}
              role="radio"
              aria-checked={value === option}
              className={`btn w-100 text-start rounded-0 text-dark ${
                value === option
                  ? "btn-outline-primary"
                  : "btn-outline-secondary"
              }`}
              onClick={() => {
                setFocus(false);
                setValue(option);
                setClicked(true)
              }}
              tabIndex="0"
            >
              {option}
            </span>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default CustomSearch;
