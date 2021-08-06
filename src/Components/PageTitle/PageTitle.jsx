import React from "react";
import s from "./PageTitle.module.scss";

const PageTitle = ({ title }) => {
  return (
    <div className={s.pageTitle}>
      {title}
    </div>
  );
};

export default PageTitle;
