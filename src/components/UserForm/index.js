import React from "react";
import { useInputValue } from "../hooks/useInputValue";
import { Form,  Input, Title } from "./styles";
import { SubmitButton } from "../SubmitButton";


export const UserForm = ({ onSubmit, title, disabled, error }) => {
  
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled}  placeholder="Email" type="email" {...email} />
        <Input disabled={disabled}  placeholder="Password" type="password" {...password} />
        <SubmitButton disabled={disabled} >{title}</SubmitButton>
        {error && {error}}
      </Form>
    </>
  );
};
