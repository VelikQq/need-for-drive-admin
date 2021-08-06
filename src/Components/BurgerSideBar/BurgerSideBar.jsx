import React from "react";
import s from "./BurderSideBar.module.scss";
import style from "../SideBar/SiderBar.module.scss";
import logo from "../../Images/SmallLogoIcon.svg";
import blogPost from "../../Images/Blog Posts Icon.svg";
import orders from "../../Images/Add New Post Icon.svg";
import menu from "../../Images/Overview (Components) Icon.svg";
import menu1 from "../../Images/Forms & Components Icon.svg";
import person from "../../Images/Person Icon.svg";
import warring from "../../Images/Error Icon.svg";
import pensil from "../../Images/pensil.svg";
import menuBtn from "../../Images/menu_btn.svg";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { menuItem } from "../../helpers/constants";

const BurgerSideBar = ({ setSideBarActive }) => {
  return (
    <div className={`${s.burgerSideBar} ${style.sideBarWrapper}`}>
      <div className={style.siderBarLogoWrapper}>
        <ReactSVG src={logo} />
        <div className={style.logoText}>Need for car</div>
      </div>
      <div className={style.linksListWrapper}>
        <ul>
          {menuItem.map(({ id, link, src, name }) => {
            return (
              <li key={id} onClick={() => setSideBarActive(false)}>
                <NavLink
                  to={link}
                  activeStyle={{
                    backgroundColor: "#fbfbfb",
                    boxShadow:
                      "inset 0px -1px 0px #e1e5eb, inset 4px 0px 0px #007bff",
                    color: "#007bff",
                  }}
                >
                  <div className={style.iconWrapper}>
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
  );
};

export default BurgerSideBar;
