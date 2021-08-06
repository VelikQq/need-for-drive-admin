import React from "react";
import s from "./CheckBoxInput.module.scss";

const CheckBox = ({ name, checked }) => {
  return (
    <div className={s.checkBoxWrapper}>
      <input
        className={s.checkBoxInput}
        type="checkbox"
        defaultChecked={checked}
        value={name}
      />
      <label className={s.checkBoxLabel}>{name}</label>
    </div>
  );
};

export default CheckBox;
