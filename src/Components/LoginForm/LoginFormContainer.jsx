import React from "react";
import { connect } from "react-redux";
import { logIn } from "../../Redux/login-reducer";
import LoginForm from "./LoginForm";

const LoginFormContainer = ({ logIn, response }) => {
  const handleSubmitLogimForm = (values) => {
    const formData = new FormData();
    formData.append("username", values.email);
    formData.append("password", values.password);
    formData.append("client_secret", "4cbcea96de");
    formData.append("client_id", "personalId12345");
    logIn(formData);
  };
  return <LoginForm {...{ handleSubmitLogimForm, response }} />;
};

const mapStateToProps = (state) => ({
  response: state.login.response,
});

export default connect(mapStateToProps, { logIn })(LoginFormContainer);
