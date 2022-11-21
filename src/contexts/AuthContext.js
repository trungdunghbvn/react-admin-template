import React, {useEffect} from 'react'
import { fakeAuthProvider } from "./auth";
import Cookies from 'js-cookie'

let AuthContext = React.createContext(null);

export default function AuthProvider({children}) {

    let [isLogin, setIsLogin] = React.useState(true);
    let [user, setUser] = React.useState(true);

    useEffect(() => {
      const username = Cookies.get('username');
      console.log('hello123');
      setUser(username);
      if(username){
        setIsLogin(true);
      }else{
        setIsLogin(false)
      }
    }, [])

    let signin = (newUser, callback) => {
      Cookies.set('username', newUser, { expires: 30 })
      return fakeAuthProvider.signin(() => {
        setUser(newUser);
        setIsLogin(true);
        callback();
      });
    };
  
    let signout = (callback) => {
      return fakeAuthProvider.signout(() => {
        setUser(null);
        callback();
      });
    };
  
    let value = { user, signin, signout, isLogin };
    console.log(user, 'user', value);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };