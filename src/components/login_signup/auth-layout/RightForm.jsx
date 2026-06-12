import "./RightForm.css";
import Login from "../Login";
import SocialLogin from "../SocialLogin";
import SignUp from "../Signup";
import { useState } from "react";
import { useSelector } from "react-redux";
import AlreadyLoggedIn from "../AlreadyLoggedIn";

const RightForm = () => {
  const [isLogin, setLogin] = useState(true); //it will be replaced with router
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);
  if (isAuthenticated) {
    return (
      <div className="rightForm">
        <div className="formWrapper">
          <AlreadyLoggedIn />
        </div>
      </div>
    );
  }
  return (
    <div className="rightForm">
      <div className="formWrapper">
        {isLogin ? <Login /> : <SignUp setLogin={setLogin} />}
        <SocialLogin />
        {/* // it will be replaced with router */}
        {isLogin ? (
          <p className="authSwitch">
            {" "}
            Don't have an account?{" "}
            <span className="authLink" onClick={() => setLogin(false)}>
              Create Account
            </span>
          </p>
        ) : (
          <p className="authSwitch">
            Already have an account?{" "}
            <span className="authLink" onClick={() => setLogin(true)}>
              Login{" "}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default RightForm;
