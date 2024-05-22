import AuthLayouts from "../components/layouts/AuthLayouts";
import FormLogin from "../components/fragments/FormLogin";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="mt-7 text-sm">
        Dont have any account yet?{" "}
        <Link className="font-bold text-blue-600" to="/register">
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
}

export default LoginPage;
