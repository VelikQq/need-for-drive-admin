import React from "react";
import s from "./Select.module.scss";

const Select = ({ array, defaultText, setFilter }) => {
  const handlerFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <select onChange={(e) => handlerFilter(e)}>
      <option value="">{defaultText}</option>
      {array &&
        array.data.map(({ id, name }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
    </select>
  );
};

export default Select;
