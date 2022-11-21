import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import Register from "./pages/register/Register";

import RequireAuth from "./components/RequireAuth";

function App() {
  return (
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
  );
}

export default App;
