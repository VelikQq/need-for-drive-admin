import React from "react";
import { Form } from "react-final-form";
import { Field } from "react-final-form";
import s from "../AddCity/AddCity.module.scss";
import Response from "./../../../Components/Response/Response";

const ChangeCity = ({ curCity, handlerCancel, onSubmit, response, closeCityResponse }) => {
  return (
    <div className={s.entityFormWrapper}>
      {response.length !== 0 && (
        <Response response={response} closeSuccessInfo={closeCityResponse} />
      )}
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.city) {
            errors.city = "Введите название города";
          }

          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="city" initialValue={curCity.data.name}>
              {({ input, meta }) => (
                <div className={s.fieldWrapper}>
                  <label>Город</label>
                  <input
                    className={
                      meta.error && meta.touched
                        ? `${s.inputField} ${s.inputWithError}`
                        : s.inputField
                    }
                    {...input}
                    type="text"
                  />
                  {meta.error && meta.touched && (
                    <div className={s.inputErrorMsg}>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            <div className={s.entityFormBtns}>
              <button className={s.addBtn} type="submit">
                Изменить
              </button>
              <button className={s.cancellBtn} onClick={handlerCancel}>
                Отменить
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default ChangeCity;
