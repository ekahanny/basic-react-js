import AuthLayouts from "../components/layouts/AuthLayouts";
import FormRegist from "../components/fragments/FormRegist";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <AuthLayouts title="Register">
      <FormRegist />
      <p className="mt-7 text-sm">
        Already have an account?{" "}
        <Link className="font-bold text-blue-600" to="/">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
}

export default RegisterPage;
