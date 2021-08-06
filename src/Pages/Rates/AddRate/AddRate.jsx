import React, { useState } from "react";
import { Form } from "react-final-form";
import { Field } from "react-final-form";
import s from "../../Cities/AddCity/AddCity.module.scss";
import Response from "./../../../Components/Response/Response";

const AddRate = ({
  onSubmit,
  curRate,
  isRateTouched,
  handlerPutRate,
  rateType,
  setAddRateActive,
  setRateTouched,
  response,
  closeRateResponse,
}) => {
  return (
    <div className={s.entityFormWrapper}>
      {response.length !== 0 && (
        <Response response={response} closeSuccessInfo={closeRateResponse} />
      )}
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.price) {
            errors.price = "Введите цену";
          }

          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="price">
              {({ input, meta }) => (
                <div className={s.fieldWrapper}>
                  <label>Цена</label>
                  <input
                    className={
                      meta.error && meta.touched
                        ? `${s.inputField} ${s.inputWithError}`
                        : s.inputField
                    }
                    {...input}
                    type="number"
                  />
                  {meta.error && meta.touched && (
                    <div className={s.inputErrorMsg}>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>

            <div className={s.fieldWrapper}>
              <label>Тип тарифа</label>
              <select
                value={curRate}
                onChange={(e) => handlerPutRate(e.target.value)}
                className={
                  isRateTouched && !curRate
                    ? `${s.inputField} ${s.inputWithError}`
                    : s.inputField
                }
              >
                <option></option>
                {rateType.data.map(({ id, name }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
              {isRateTouched && !curRate && (
                <div className={s.inputErrorMsg}>Выберите тип тарифаы</div>
              )}
            </div>

            <div className={s.entityFormBtns}>
              <button
                className={s.addBtn}
                type="submit"
                onClick={() => setRateTouched(true)}
              >
                Добавить
              </button>
              <button
                className={s.cancellBtn}
                onClick={() => setAddRateActive(false)}
              >
                Отменить
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default AddRate;
