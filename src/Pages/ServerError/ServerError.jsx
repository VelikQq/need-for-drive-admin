import React from "react";
import s from './ServerError.module.scss';
import { NavLink } from 'react-router-dom';

const ServerError = ({response}) => {
  return (
    <div className={s.serverErrorWrapper}>
      <div className={s.errorStatus}>{response.status}</div>
      <div className={s.errorText}>
          Что то пошло не так
      </div>
      <div className={s.tryReloadText}>Попробуйте перезагрузить страницу</div>
      <NavLink to="/">Назад</NavLink>
    </div>
  );
};

export default ServerError;
