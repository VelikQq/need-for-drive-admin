import React from "react";
import SideBar from "../../Components/SideBar/SiderBar";
import Content from "../../Components/Content/Content";
import s from "./adminPage.module.scss";

const AdminPage = () => {
  return (
    <div className={s.adminPageWrapper}>
      <SideBar />
      <Content />
    </div>
  );
};

export default AdminPage;
