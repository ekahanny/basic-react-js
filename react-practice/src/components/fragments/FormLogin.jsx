// import React from "react";
import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";

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

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
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
