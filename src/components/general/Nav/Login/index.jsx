//login.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import { login } from "../../../../authSlice";
import { useNavigate } from "react-router-dom";
import "../login-reg.css";

export default function Login() {
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeFunc = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const authFunc = async () => {
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      );
      const user = data.user;
  
      if (user) {
        dispatch(login(user.uid));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("uid", user.uid);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <div className="main">
        <div className="auth-container">
          <h2>Login</h2>
          <div className="container-sign">
            <input
              name="email"
              type="email"
              value={authData.email}
              onChange={onChangeFunc}
              placeholder="email"
            />
            <input
              name="password"
              type="password"
              value={authData.password}
              onChange={onChangeFunc}
              placeholder="password"
            />
          </div>
          <div onClick={authFunc} className="auth-container-button">
            Login
          </div>
        </div>
      </div>
    </div>
  );
}