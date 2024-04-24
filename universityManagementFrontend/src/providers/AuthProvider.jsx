import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used");
  return context;
};
const token = localStorage.getItem("token");
const user = localStorage.getItem("userData");

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [userLoggedInData, setUserLoggedInData] = useState(user);
  const navigate = useNavigate();

  const login = async (username, password) => {
    const loginBody = { username, password };
    try {
      const res = await axios.post("/login", loginBody, {
        headers: { "Content-Type": "application/json" },
      });
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("username", res.data.user.username);
      console.log(res.data);
      setIsLoggedIn(true);
      setUserLoggedInData(res.data.user);
    } catch (err) {
      throw new Error("invalid username or password");
    }
  };
  const logout = () => {
    localStorage.clear(),
      setUserLoggedInData(null),
      setIsLoggedIn(false),
      navigate("/");
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, userLoggedInData, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
