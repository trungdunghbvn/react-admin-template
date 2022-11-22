/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function useAuth() {
  return React.useContext(AuthContext);
}

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
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
