import React from "react";
import s from "./ChangeEntityBtn.module.scss";

const ChangeEntityButton = ({handlerChangeEntity, id}) => {
  return (
    <div className={s.buttonWrapper}>
      <button onClick={() => handlerChangeEntity(id)}>Изменить</button>
    </div>
  );
};

export default ChangeEntityButton;
