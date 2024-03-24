import React, { useState } from "react";

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (c) => () => {
    const currentCategoryID = checked.indexOf(c);
    const newCheckedCategoryID = [...checked];
    if (currentCategoryID === -1) {
      newCheckedCategoryID.push(c);
    } else {
      newCheckedCategoryID.splice(currentCategoryID, 1);
    }
    setChecked(newCheckedCategoryID);
    handleFilters(newCheckedCategoryID, 1);
  };

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      {categories.map((c, i) => (
        <div className="form-check" key={i}>
          <input
            className="checker1 form-check-input"
            type="checkbox"
            id="test"
            value={checked.indexOf(c._id === -1)}
            onChange={handleToggle(c._id)}
          />
          <label
            className="label-text form-check-label fs-6"
            htmlFor="flexCheckDefault"
          >
            {capitalize(c.category_Name)}
          </label>
        </div>
      ))}
    </>
  );
};

export default Checkbox;
