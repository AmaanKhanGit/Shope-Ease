import { useRef, useState } from "react";
import "./Signup.css";
import toast from "react-hot-toast";
import { addUser } from "../services/userAPI";
import LoadingOverlay from "../common/LoadingOverlay";

const SignUp = ({ setLogin }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [isLoading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      toast.error("Password must match");
      return;
    }

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    try {
      const userData = await addUser({
        firstName,
        lastName,
        userName,
        email,
        password,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      userNameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";

      toast.success(
        "This is not actually your user name You should used given uername for actual login",
      );
      // it will be replaced with useNavigate
      setLogin(true);
    }
  };

  const [isPass, setPass] = useState(true);
  const [isConfPass, setConfPass] = useState(true);

  return (
    <form className="signupForm" onSubmit={handleSignUp}>
      {isLoading && <LoadingOverlay />}

      <h2 className="signupTitle">Create Account </h2>

      <p className="signupSubtitle">Join ShopeEase and start shopping today</p>

      <div className="nameRow">
        <div className="inputGroup">
          <label>First Name</label>
          <input
            ref={firstNameRef}
            type="text"
            placeholder="Kalu"
            name="firstName"
            required
          />
        </div>

        <div className="inputGroup">
          <label>Last Name</label>
          <input
            ref={lastNameRef}
            type="text"
            placeholder="Madari"
            name="lastName"
          />
        </div>
      </div>

      <div className="inputGroup">
        <label>Username</label>
        <input
          ref={userNameRef}
          type="text"
          placeholder="kalumadari"
          name="username"
          required
        />
      </div>

      <div className="inputGroup">
        <label>Email</label>
        <input
          ref={emailRef}
          type="email"
          placeholder="kalu@example.com"
          name="email"
          required
        />
      </div>

      <div className="inputGroup">
        <label>Password</label>
        <input
          ref={passwordRef}
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
          ref={confirmPasswordRef}
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
