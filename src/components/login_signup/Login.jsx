import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/user";
import { login, user } from "../services/userAPI";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../common/LoadingOverlay";
import toast from "react-hot-toast";

const Login = () => {
  const userName = useRef();
  const userPassword = useRef();

  const dispatch = useDispatch();
  const nav = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [isPass, setPass] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const currUserName = userName.current.value;
    const currPassword = userPassword.current.value;

    try {
      const accessToken = await login(currUserName, currPassword);
      const userdata = await user(accessToken);

      toast.success("Welcome Back!");

      dispatch(
        userAction.login({
          token: accessToken,
          user: userdata,
        }),
      );

      nav("/");
    } catch (error) {
      toast.error("Invalid User ID or Password", {
        style: {
          border: "1px solid #8b0025",
          color: "#8b0025",
        },
      });
    } finally {
      setLoading(false);
      userName.current.value = "";
      userPassword.current.value = "";
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
          required
        />
      </div>

      <div className="inputGroup">
        <label>Password</label>

        <input
          ref={userPassword}
          type={`${isPass ? "password" : "text"}`}
          placeholder="Enter your password"
          name="password"
          required
        ></input>
        <i
          className={`bi bi-eye${isPass ? "-slash" : ""}`}
          onClick={() => setPass((prev) => !prev)}
        ></i>
      </div>

      <button type="submit" className="loginBtn">
        Login
      </button>
    </form>
  );
};

export default Login;
