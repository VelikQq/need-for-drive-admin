import React from "react";
import s from './OrderChangeSelect.module.scss';

const OrderChangeSelect = ({ array, label, selectValue, handlerPutSelect, value }) => {
  return (
    <div className={s.selectWrapper}>
      <label>{label}</label>
      <select onChange={(e) => handlerPutSelect(e.target.value)} value={value}>
        {array.map(({ id, name }) => {
          if (selectValue) {
            return (
              <option key={id} value={id} selected={id === selectValue}>
                {name}
              </option>
            );
          } else {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};

export default OrderChangeSelect;
