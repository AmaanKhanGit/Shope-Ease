import { useRef } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../store/user";
import { login, user } from "../components/services/userAPI";

const Login_SignUp = () => {
  const userName = useRef();
  const userPassword = useRef();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const currUserName = userName.current.value;
    const currPassword = userPassword.current.value;

    const accessToken = await login(currUserName, currPassword);

    const userdata = await user(accessToken);

    dispatch(
      userAction.login({
        token: accessToken,
        user: userdata,
      }),
    );

    console.log("logged in ", "{ ", accessToken, " }", userdata);
  };

  return (
    <>
      <form method="post" onSubmit={handleLogin}>
        <input ref={userName} type="text" placeholder="userId" name="userId" />
        <input
          ref={userPassword}
          type="password"
          placeholder="password"
          name="password"
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login_SignUp;
