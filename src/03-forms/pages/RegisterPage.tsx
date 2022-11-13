import React from "react";
import { useForm } from "../hooks/useForm";
import "./../styles/styles.css";

export const RegisterPage = () => {
  const {
    onChange,
    formData,
    resetForm,
    isValidEmail,
    name,
    email,
    password1,
    password2,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={onSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={onChange}
          value={name}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />

        {name.trim().length <= 0 && <span>Este campo es necesario.</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={email}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no valido.</span>}
        <input
          type="password"
          name="password1"
          placeholder="Password"
          onChange={onChange}
          value={password1}
        />

        {password1.trim().length <= 0 && <span>Este campo es necesario.</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña debe contener más de 6 caracteres.</span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          onChange={onChange}
          value={password2}
        />

        {password2.trim().length <= 0 && <span>Este campo es necesario.</span>}
        {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales.</span>}
        {password2.trim().length < 6 && password2.trim().length > 0 && (
          <span>La contraseña debe contener más de 6 caracteres.</span>
        )}
        <button type="submit">Create</button>

        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
