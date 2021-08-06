import React, { useEffect, useState } from "react";
import close from "../../Images/close.png";
import checkIcon from "../../Images/check_icon.png";
import s from "./Response.module.scss";

const Response = ({ response, closeSuccessInfo }) => {
  const [responseCodeStatus, setResponseCode] = useState(0);
  useEffect(() => {
    setResponseCode(response.status);
  }, []);

  return (
    <div
      className={
        responseCodeStatus !== 400
          ? s.successResponse
          : `${s.successResponse} ${s.errorResponse}`
      }
    >
      <div className={s.leftSuccessInfo}>
        <img src={checkIcon} alt="chech" />
        <span>
          {responseCodeStatus === 400
            ? "При изменении произошла ошибка"
            : "Изменения применены успешно!"}
        </span>
      </div>
      <div className={s.rightSuccesInfo} onClick={closeSuccessInfo}>
        <img src={close} alt="close" />
      </div>
    </div>
  );
};

export default Response;
