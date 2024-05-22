import AuthLayouts from "../components/layouts/AuthLayouts";
import FormRegist from "../components/fragments/FormRegist";

function RegisterPage() {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegist />
    </AuthLayouts>
  );
}

export default RegisterPage;
