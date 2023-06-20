import React, { useContext } from "react";
import { UserForm } from "../../UserForm";
import { useRegisterMutation } from "../../container/useRegisterMutation";
import { useLoginMutation } from "../../container/useLoginMutation";
import {Context} from "../../../Context";

export default  () => {
  const { activateAuth } = useContext(Context);
  const { registerMutation, loading, error } = useRegisterMutation();
  const {
    loginMutation: login,
    loading: loadingLogin,
    error: errorLogin,
  } = useLoginMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data;
     // activateAuth(signup);
    });
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    login({ variables }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  const errorMsg = error && "El usuario ya existe.";
  const errorMsgLogin = errorLogin && "El usuario o contraseña es incorrecto.";

  return (
    <>
      <UserForm
        disabled={loading}
        error={errorMsg}
        title="Registrarse"
        onSubmit={onSubmit}
      />
      <UserForm
        disabled={loadingLogin}
        title="Iniciar sesion"
        error={errorMsgLogin}
        onSubmit={onSubmitLogin}
      />
    </>
  );
};


