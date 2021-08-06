import React from "react";
import { Form } from "react-final-form";
import { Field } from "react-final-form";
import s from "../../Cities/AddCity/AddCity.module.scss";
import Response from './../../../Components/Response/Response';

const AddRateType = ({
  onSubmit,
  setAddRateTypeActive,
  response,
  closeRateTypeResponse,
}) => {
  return (
    <div className={s.entityFormWrapper}>
      {response.length !== 0 && (
        <Response
          response={response}
          closeSuccessInfo={closeRateTypeResponse}
        />
      )}
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Введите название тарифа";
          }
          if (!values.unit) {
            errors.unit = "Введите единицу измерения";
          }

          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
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

            <Field name="unit">
              {({ input, meta }) => (
                <div className={s.fieldWrapper}>
                  <label>Ед. измерения</label>
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
                Добавить
              </button>
              <button
                className={s.cancellBtn}
                onClick={() => setAddRateTypeActive(false)}
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

export default AddRateType;
