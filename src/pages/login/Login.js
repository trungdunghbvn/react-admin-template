import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import { AuthContext } from '../../contexts/AuthContext';
import './Login.scss';
import { TextField } from '../../components/TextField';

function useAuth() {
  return React.useContext(AuthContext);
}

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = () => {
    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="Login">
      <div className="Login__Container">
        <div className="Login__Container__Login">
          <div>
            <h1>Login</h1>
            <p>Sign In to your account</p>
            <TextField label="Username" value={username} onChange={value => setUserName(value)} />
            <br />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={value => setPassword(value)}
            />
            <br />
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              <Link to="/register">Forgot password</Link>
              <Button onClick={handleSubmit} type="submit" variant="contained">
                Login
              </Button>
            </Stack>
          </div>
          <br />
        </div>
        {/* <div className="Login__Container__Register">
          <Link to="/register">
            <button
              type="button"
              color="primary"
              className="mt-3"
              tabIndex={-1}
            >
              Register Now!
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
