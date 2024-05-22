/* eslint-disable react/prop-types */
import Label from "./Label";
import Input from "./Input";

function InputForm(props) {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-8">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default InputForm;
