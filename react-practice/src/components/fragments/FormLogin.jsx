import React from "react";
import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";

function FormLogin() {
  return (
    <form action="">
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
      <Button color="bg-blue-600" className="w-full">
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
