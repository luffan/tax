import React from "react";
import { useForm } from "react-hook-form";

function UserForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        ref={register({ pattern: /^[A-Za-z]+$/i })}
      />
      <br/>
      <input
        type="text"
        placeholder="Surname"
        name="surname"
        ref={register({ pattern: /^[A-Za-z]+$/i })}
      />
      <br/>
      <input
        type="text"
        placeholder="Middlename"
        name="middlename"
        ref={register({ pattern: /^[A-Za-z]+$/i })}
      />
      <br/>
      <input
        type="text"
        placeholder="PassportId"
        name="passprotId"
        ref={register({ minLength: { value: 8 }, pattern: /^[A-Za-z]+$/i })}
      />
      <br/>
      <input type="text" placeholder="LogIn" name="logIn" ref={register} />
      <br/>
      <input
        type="text"
        placeholder="password"
        name="password"
        ref={register({
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <br/>
      <input type="submit" />
    </form>
  );
}

export default UserForm;
