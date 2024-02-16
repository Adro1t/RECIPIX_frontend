import React, { useState } from "react";

const RadioBox = ({ times, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    handleFilters(e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      {times.map((t, i) => (
        <div className="form-check" key={i}>
          <input
            className=" checker2 form-check-input"
            type="radio"
            id="exampleRadios1"
            value={`${t._id}`}
            onChange={handleChange}
            name={t}
          />
          <label
            className=" label-text form-check-label"
            htmlFor="exampleRadios1"
          >
            {t.name}
          </label>
        </div>
      ))}
    </>
  );
};

export default RadioBox;
