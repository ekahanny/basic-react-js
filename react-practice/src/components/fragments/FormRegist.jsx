// import React from "react";
import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";

function FormRegist() {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Insert your name here..."
        name="fullname"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="******"
        name="confirmPass"
      />
      <Button color="bg-blue-600" className="w-full">
        Register
      </Button>
    </form>
  );
}

export default FormRegist;
