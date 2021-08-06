import React from "react";
import s from "./EntityWrapper.module.scss";

const EntityWrapper = ({ children }) => {
  return (
      <div className={s.entityWrapper}>{children}</div>
  );
};

export default EntityWrapper;
