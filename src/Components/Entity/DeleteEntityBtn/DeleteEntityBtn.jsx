import React from "react";
import s from "./DeleteEntityBtn.module.scss";

const DeleteEntityButton = ({handlerDeleteEntity, id}) => {
  return (
    <div className={s.buttonWrapper}>
      <button onClick={() => handlerDeleteEntity(id)}>Удалить</button>
    </div>
  );
};

export default DeleteEntityButton;
