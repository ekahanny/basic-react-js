// import React from "react";
import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";
import { useEffect, useRef, useState } from "react";
import { Login } from "../../services/auth.service";

function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    Login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        console.log("Token: ", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log("Error Message: ", res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Username"
        type="text"
        placeholder="jhondoe"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      {loginFailed && <p className="text-red-500 mb-4">{loginFailed}</p>}

      <Button color="bg-blue-600" className="w-full" type="submit">
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
