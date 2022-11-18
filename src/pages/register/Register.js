import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function useAuth() {
  return React.useContext(AuthContext);
}

export default function Register() {
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
