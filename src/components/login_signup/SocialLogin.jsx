import { FaGoogle, FaGithub, FaLinkedinIn, FaApple } from "react-icons/fa";

import "./SocialLogin.css";

const SocialLogin = () => {
  return (
    <div className="socialLogin">
      <div className="divider">
        <span>OR</span>
      </div>

      <button type="button" className="socialBtn">
        <FaGoogle />
        Continue with Google
      </button>

      <button type="button" className="socialBtn">
        <FaApple />
        Continue with Apple
      </button>
    </div>
  );
};

export default SocialLogin;
