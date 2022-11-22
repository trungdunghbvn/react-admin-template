import React, { useEffect, useMemo } from 'react';
import Cookies from 'js-cookie';
import { fakeAuthProvider } from './auth';

const AuthContext = React.createContext(null);

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = React.useState(true);
  const [user, setUser] = React.useState(true);

  useEffect(() => {
    const username = Cookies.get('username');
    setUser(username);
    if (username) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const signin = (newUser, callback) => {
    Cookies.set('username', newUser, { expires: 30 });
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      setIsLogin(true);
      callback();
    });
  };

  const signout = callback =>
    fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });

  // const value = { user, signin, signout, isLogin };
  const value = useMemo(() => ({ user, signin, signout, isLogin }), [isLogin, user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
