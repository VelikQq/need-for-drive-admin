import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import logo from "../../Images/SmallLogoIcon.svg";
import menuBtn from "../../Images/menu_btn.svg";
import s from "./SiderBar.module.scss";
import { NavLink } from "react-router-dom";
import BurgerSideBar from "../BurgerSideBar/BurgerSideBar";
import { menuItem } from "../../helpers/constants";

const SideBar = () => {
  const [isSideBarActive, setSideBarActive] = useState(false);
  const activateSiderBar = () => {
    setSideBarActive(!isSideBarActive);
  };
  return (
    <>
      <div className={s.sideBarBtn} onClick={() => activateSiderBar()}>
        <ReactSVG src={menuBtn} />
      </div>
      {isSideBarActive && <BurgerSideBar {...{ setSideBarActive }} />}
      <div className={s.sideBarWrapper}>
        <div className={s.siderBarLogoWrapper}>
          <ReactSVG src={logo} />
          <div className={s.logoText}>Need for car</div>
        </div>
        <div className={s.linksListWrapper}>
          <ul>
            {menuItem.map(({ id, link, src, name }) => {
              return (
                <li key={id}>
                  <NavLink
                    to={link}
                    activeStyle={{
                      backgroundColor: "#fbfbfb",
                      boxShadow:
                        "inset 0px -1px 0px #e1e5eb, inset 4px 0px 0px #007bff",
                      color: "#007bff",
                    }}
                  >
                    <div className={s.iconWrapper}>
                      <ReactSVG src={src} />
                    </div>
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default SideBar;
