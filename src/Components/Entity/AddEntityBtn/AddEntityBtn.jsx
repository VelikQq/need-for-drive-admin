import React from "react";
import s from "./AddEntityBtn.module.scss";

const AddEntityButton = ({ handlerAddEntity }) => {
  return (
    <div className={s.buttonWrapper}>
      <button onClick={handlerAddEntity}>Добавить</button>
    </div>
  );
};

export default AddEntityButton;
