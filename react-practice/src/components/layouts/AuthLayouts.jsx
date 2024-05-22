/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function AuthLayouts(props) {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-5">
          Welcome, please enter your details
        </p>
        {children}
        <p className="mt-7 text-sm">
          {type === "login"
            ? "Dont have an account? "
            : "Already have an account? "}

          {/* Kalau login */}
          {type === "login" && (
            <Link className="font-bold text-blue-600" to="/register">
              Register
            </Link>
          )}

          {/* Kalau Register */}
          {type === "register" && (
            <Link className="font-bold text-blue-600" to="/">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}

export default AuthLayouts;
