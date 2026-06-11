import "./SignUp.css";

const SignUp = ({ setLogin }) => {
  const handleSignUp = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  return (
    <form className="signupForm" onSubmit={handleSignUp}>
      <h2 className="signupTitle">Create Account </h2>

      <p className="signupSubtitle">Join ShopeEase and start shopping today</p>

      <div className="nameRow">
        <div className="inputGroup">
          <label>First Name</label>
          <input type="text" placeholder="John" name="firstName" />
        </div>

        <div className="inputGroup">
          <label>Last Name</label>
          <input type="text" placeholder="Doe" name="lastName" />
        </div>
      </div>

      <div className="inputGroup">
        <label>Username</label>
        <input type="text" placeholder="johndoe" name="username" />
      </div>

      <div className="inputGroup">
        <label>Email</label>
        <input type="email" placeholder="john@example.com" name="email" />
      </div>

      <div className="inputGroup">
        <label>Password</label>
        <input type="password" placeholder="Enter password" name="password" />
      </div>

      <div className="inputGroup">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
        />
      </div>

      <button type="submit" className="signupBtn">
        Create Account
      </button>
    </form>
  );
};

export default SignUp;
