import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import Register from "./pages/register/Register";

import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
