import { useState } from "react";
import "./SignUp.css";

const SignUp = ({ setLogin }) => {
  const handleSignUp = (e) => {
    e.preventDefault();
    setLogin(true); // it will be replaced with useNavigate
  };

  const [isPass, setPass] = useState(true);
  const [isConfPass, setConfPass] = useState(true);

  return (
    <form className="signupForm" onSubmit={handleSignUp}>
      <h2 className="signupTitle">Create Account </h2>

      <p className="signupSubtitle">Join ShopeEase and start shopping today</p>

      <div className="nameRow">
        <div className="inputGroup">
          <label>First Name</label>
          <input type="text" placeholder="Kalu" name="firstName" required />
        </div>

        <div className="inputGroup">
          <label>Last Name</label>
          <input type="text" placeholder="Madari" name="lastName" />
        </div>
      </div>

      <div className="inputGroup">
        <label>Username</label>
        <input type="text" placeholder="kalumadari" name="username" required />
      </div>

      <div className="inputGroup">
        <label>Email</label>
        <input
          type="email"
          placeholder="kalu@example.com"
          name="email"
          required
        />
      </div>

      <div className="inputGroup">
        <label>Password</label>
        <input
          type={`${isPass ? "password" : "text"}`}
          placeholder="Enter password"
          name="password"
          required
        />
        <i
          className={`bi bi-eye${isPass ? "-slash" : ""}`}
          onClick={() => setPass((prev) => !prev)}
        ></i>
      </div>

      <div className="inputGroup">
        <label>Confirm Password</label>
        <input
          type={`${isConfPass ? "password" : "text"}`}
          placeholder="Confirm password"
          name="confirmPassword"
          required
        />
        <i
          className={`bi bi-eye${isConfPass ? "-slash" : ""}`}
          onClick={() => setConfPass((prev) => !prev)}
        ></i>
      </div>

      <button type="submit" className="signupBtn">
        Create Account
      </button>
    </form>
  );
};

export default SignUp;
