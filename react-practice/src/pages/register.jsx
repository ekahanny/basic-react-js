import AuthLayouts from "../components/layouts/AuthLayouts";
import FormRegist from "../components/fragments/FormRegist";

function RegisterPage() {
  return (
    <AuthLayouts title="Register">
      <FormRegist />
    </AuthLayouts>
  );
}

export default RegisterPage;
