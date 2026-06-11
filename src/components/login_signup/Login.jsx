import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/user";
import { login, user } from "../services/userAPI";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../common/LoadingOverlay";

const Login = () => {
  const userName = useRef();
  const userPassword = useRef();

  const dispatch = useDispatch();
  const nav = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const currUserName = userName.current.value;
    const currPassword = userPassword.current.value;

    try {
      const accessToken = await login(currUserName, currPassword);
      const userdata = await user(accessToken);
      dispatch(
        userAction.login({
          token: accessToken,
          user: userdata,
        }),
      );
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      nav("/");
    }
  };
  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      {isLoading && <LoadingOverlay />}
      <h2 className="loginTitle">Welcome Back </h2>

      <p className="loginSubtitle">Sign in to access your account</p>

      <div className="inputGroup">
        <label>User ID</label>

        <input
          ref={userName}
          type="text"
          placeholder="Enter your user id"
          name="userId"
        />
      </div>

      <div className="inputGroup">
        <label>Password</label>

        <input
          ref={userPassword}
          type="password"
          placeholder="Enter your password"
          name="password"
        />
      </div>

      <button type="submit" className="loginBtn">
        Login
      </button>
    </form>
  );
};

export default Login;
