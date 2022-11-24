import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import LoginPage from './pages/login/Login';
import Register from './pages/register/Register';
import RequireAuth from './components/RequireAuth';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={
          <RequireAuth>
            <DefaultLayout />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
