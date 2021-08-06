import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={s.footerContainer}>
        <div className={s.footerLinksWrapper}>
          <NavLink to="/">Главная страница</NavLink>
          <NavLink to="/">Ссылка</NavLink>
        </div>

        <div className={s.coopyRightText}>Copyright © 2020 Simbirsoft</div>
      </div>
    </footer>
  );
};

export default Footer;
