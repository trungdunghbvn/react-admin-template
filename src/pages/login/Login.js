import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function useAuth() {
  return React.useContext(AuthContext);
}

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
      <br />
      <Link to="/register">
        <button color="primary" className="mt-3" active tabIndex={-1}>
          Register Now!
        </button>
      </Link>
    </div>
  );
}
