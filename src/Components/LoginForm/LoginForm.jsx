import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import s from "./LoginForm.module.scss";
import logoImg from "../../Images/Logo Icon.svg";

const LoginForm = ({ handleSubmitLogimForm, response }) => {
  const [submitError, setError] = useState(null);
  useEffect(() => {
    setError(response);
  }, [response]);
  return (
    <div className={s.loginPageWrapper}>
      <div className={s.loginFormContainer}>
        <div className={s.loginLogoWrapper}>
          <ReactSVG src={logoImg} />
          <div className={s.logoText}>Need For Drive</div>
        </div>
        <div className={s.formWrapper}>
          <div className={s.formNameText}>Вход</div>
          <div className={s.formContiner}>
            <Form
              onSubmit={handleSubmitLogimForm}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Введите почту";
                }
                if (!values.password) {
                  errors.password = "Введите пароль";
                }

                return errors;
              }}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div className={s.fieldWrapper}>
                        <label className={s.fieldLabel}>Почта</label>
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
                  <Field name="password">
                    {({ input, meta }) => (
                      <div className={s.fieldWrapper}>
                        <label className={s.fieldLabel}>Пароль</label>
                        <input
                          className={
                            meta.error && meta.touched
                              ? `${s.inputField} ${s.inputWithError}`
                              : s.inputField
                          }
                          {...input}
                          type="password"
                        />
                        {meta.error && meta.touched && (
                          <div className={s.inputErrorMsg}>{meta.error}</div>
                        )}
                      </div>
                    )}
                  </Field>
                  <div className={s.formBottomBtns}>
                    <NavLink to="/">Запросить доступ</NavLink>
                    <button type="submit">Войти</button>
                  </div>
                </form>
              )}
            />
          </div>
          <div className={s.submitError}>
            {submitError ? submitError : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
