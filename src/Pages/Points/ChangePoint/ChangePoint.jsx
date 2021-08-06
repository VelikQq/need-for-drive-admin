import React, { useEffect } from "react";
import { Form } from "react-final-form";
import { Field } from "react-final-form";
import s from "../../Cities/AddCity/AddCity.module.scss";
import Response from "./../../../Components/Response/Response";

const ChangePoint = ({
  onSubmit,
  handlerCancel,
  point,
  cities,
  curCity,
  isCityTouched,
  setCityTouched,
  handlerPutCity,
  setCurCity,
  response,
  closePointResponse,
}) => {
  return (
    <div className={s.entityFormWrapper}>
      {response.length !== 0 && (
        <Response response={response} closeSuccessInfo={closePointResponse} />
      )}
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Введите название точки";
          }
          if (!values.address) {
            errors.address = "Введите адрес";
          }

          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name" initialValue={point.data.name}>
              {({ input, meta }) => (
                <div className={s.fieldWrapper}>
                  <label>Название</label>
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

            <Field name="address" initialValue={point.data.address}>
              {({ input, meta }) => (
                <div className={s.fieldWrapper}>
                  <label>Адресс</label>
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

            <div className={s.fieldWrapper}>
              <label>Город</label>
              <select
                value={curCity}
                onChange={(e) => handlerPutCity(e.target.value)}
                className={
                  isCityTouched && !curCity
                    ? `${s.inputField} ${s.inputWithError}`
                    : s.inputField
                }
              >
                <option></option>
                {cities.data.map(({ id, name }) => {
                  if (point.data.cityId) {
                    return (
                      <option
                        key={id}
                        value={id}
                        selected={id === point.data.cityId.id}
                      >
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
              {isCityTouched && !curCity && (
                <div className={s.inputErrorMsg}>Выберите город</div>
              )}
            </div>

            <div className={s.entityFormBtns}>
              <button
                className={s.addBtn}
                type="submit"
                onClick={() => setCityTouched(true)}
              >
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

export default ChangePoint;
