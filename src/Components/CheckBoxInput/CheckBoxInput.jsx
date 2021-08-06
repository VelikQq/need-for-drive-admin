import React from "react";
import s from "./CheckBoxInput.module.scss";

const CheckBoxInput = ({
  inputName,
  id,
  price,
  handleChange,
  currentInputType,
  checked
}) => {
  return (
    <div className={s.checkBoxWrapper}>
      <input
        type="checkbox"
        className={s.checkBoxInput}
        value={inputName}
        defaultChecked={checked}
        id={id}
        onClick={(event) => handleChange(event, id)}
      />
      <label className={s.checkBoxLabel} htmlFor={id}>
        {inputName}, {price}р
      </label>
    </div>
  );
};

export default CheckBoxInput;
