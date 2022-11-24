import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function useAuth() {
  return React.useContext(AuthContext);
}

export default function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
