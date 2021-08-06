import React, { useState } from "react";
import notific from "../../Images/Notifications.svg";
import count from "../../Images/Count.svg";
import avatar from "../../Images/Avatar.svg";
import arrow from "../../Images/dropdown_icon.svg";
import linza from "../../Images/linza.svg";
import { ReactSVG } from "react-svg";
import Cookies from "js-cookie";
import s from "./Header.module.scss";

const Header = () => {
  const [isLogoutActive, setLogoutActive] = useState(false);

  const handlerAdminPanel = () => {
    setLogoutActive(!isLogoutActive);
  };

  const handlerLogOut = () => {
    Cookies.remove("userToken");
    Cookies.remove("refreshToken");
    window.location.reload();
  };
  return (
    <header>
      <div className={s.searchWrapper}>
        <div className={s.linzaIconWrapper}>
          <ReactSVG src={linza} />
        </div>

        <input type="text" placeholder="Поиск ..." />
      </div>
      <div className={s.notificationWrapper}>
        <ReactSVG src={notific} />
        <div className={s.countNotification}>
          <ReactSVG src={count} />
        </div>
      </div>
      <div className={s.adminBlockWrapper} onClick={() => handlerAdminPanel()}>
        {isLogoutActive && (
          <div className={s.logOutWrapper}>
            <button onClick={() => handlerLogOut()}>Выйти</button>
          </div>
        )}
        <div className={s.adminAvatar}>
          <ReactSVG src={avatar} />
        </div>

        <div className={s.adminName}>Admin</div>
        <div className={s.adminArrow}>
          <img src={arrow} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
