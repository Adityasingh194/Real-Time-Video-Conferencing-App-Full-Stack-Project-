import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../environment";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: `${server.prod}/api/users` 
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const handleRegister = async (name, username, password) => {
    try {
      const res = await client.post("/register", { name, username, password });
      if (res.status === httpStatus.CREATED) {
        return res.data.message;
      }
    } catch (err) {
      throw new Error(err.response?.data?.message || "Registration failed");
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const res = await client.post("/login", { username, password });
      if (res.status === httpStatus.OK) {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      }
    } catch (err) {
      throw new Error(err.response?.data?.message || "Login failed");
    }
  };

  const getHistoryOfUser = async () => {
    try {
      const res = await client.get("/getallactivity", {
        params: { token: localStorage.getItem("token") },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  const addToUserHistory = async (meetingCode) => {
    try {
      const res = await client.post("/addtoactivity", {
        token: localStorage.getItem("token"),
        meeting_code: meetingCode,
      });
      return res;
    } catch (err) {
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleLogin, handleRegister, getHistoryOfUser, addToUserHistory, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
