//register
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../../firebase";
import "../login-reg.css";
import { useNavigate } from "react-router-dom";
import { createUserCart } from "../../../../UserService";

const Register = () => {
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const navigate = useNavigate();     

  const onChangeFunc = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const authFunc = async () => {
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      );
      const user = data.user;

      if (user) {
        await createUserCart(); // after register, create bucket in data
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <div className="main">
        <div className="auth-container">
          <h2>Register</h2>
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
            Register
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
