import React from "react";
import { ReactSVG } from "react-svg";
import preloader from '../../Images/preloader.svg';
import s from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={s.preloaderWrapper}>
     <ReactSVG src={preloader}/>
    </div>
  );
};

export default Preloader;
