/* eslint-disable react/prop-types */

function Button(props) {
  const {
    children = "Submit",
    color = "bg-black",
    // nilai default & akan ter-override jika type memiliki value berbeda pada component lain
    type = "button",
    // ambil props onClick kosong sebagai default
    onClick = () => {},
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${color} text-white`}
      type={type}
      // jalankan props onClick
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
