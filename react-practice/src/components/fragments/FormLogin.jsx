// import React from "react";
import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";
import { useEffect, useRef } from "react";

function FormLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    console.log(email);
    let password = event.target.password.value;
    console.log(password);

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    window.location.href = "/products";
  };

  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <Button color="bg-blue-600" className="w-full" type="submit">
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
