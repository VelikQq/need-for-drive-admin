import React, { useEffect } from "react";
import { Form } from "react-final-form";
import { Field } from "react-final-form";
import s from "../../Cities/AddCity/AddCity.module.scss";
import Response from "./../../../Components/Response/Response";

const ChangeCarCategory = ({
  handlerCancel,
  onSubmit,
  carCategory,
  isDescriptionActive,
  categoryDescription,
  setDescriptionActive,
  handlerSetDescr,
  setCategoryDescription,
  response,
  closeCarCategoryResponse,
}) => {
  useEffect(() => {
    if (carCategory.data.description)
      setCategoryDescription(carCategory.data.description);
  }, []);

  return (
    <div className={s.entityFormWrapper}>
      {response.length !== 0 && (
        <Response
          response={response}
          closeSuccessInfo={closeCarCategoryResponse}
        />
      )}
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Введите название тарифа";
          }

          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name" initialValue={carCategory.data.name}>
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

            <div className={s.fieldWrapper}>
              <label>Описание</label>
              <textarea
                className={
                  !categoryDescription && isDescriptionActive
                    ? `${s.inputField} ${s.inputWithError}`
                    : s.inputField
                }
                defaultValue={carCategory.data.description}
                onChange={(e) => handlerSetDescr(e.target.value)}
              />
              {!categoryDescription && isDescriptionActive && (
                <div className={s.inputErrorMsg}>Введите описание</div>
              )}
            </div>

            <div className={s.entityFormBtns}>
              <button
                className={s.addBtn}
                type="submit"
                onClick={() => setDescriptionActive(true)}
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

export default ChangeCarCategory;
