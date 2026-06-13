import { useDispatch } from "react-redux";
import "./LogoutSection.css";
import { useNavigate } from "react-router-dom";
import { userAction } from "../../store/user";
import { useState } from "react";

const LogoutSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
    dispatch(userAction.logout());
  };
  return (
    <div className="logout-section">
      <div className="logout-content">
        <h2>Logout</h2>
        <p>Sign out from your account and end your current session.</p>
      </div>

      <button className="logout-btn-profile" onClick={handleLogOut}>
        <i className="bi bi-box-arrow-right"></i>
        Logout
      </button>
    </div>
  );
};

export default LogoutSection;
