import toast from "react-hot-toast";
import "./ProfileSidebar.css";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/user";
import { useNavigate } from "react-router-dom";

const ProfileSidebar = () => {
  const handleBtnClick = () => {
    toast.success("I'll add it SOON!", { position: "top-left" });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
    dispatch(userAction.logout());
  };

  return (
    <aside className="profile-sidebar">
      <div className="sidebar-links">
        <button className="sidebar-link" onClick={handleBtnClick}>
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </button>

        <button className="sidebar-link" onClick={handleBtnClick}>
          <i className="bi bi-heart"></i>
          <span>Wishlist</span>
        </button>

        <button className="sidebar-link" onClick={handleBtnClick}>
          <i className="bi bi-cart3"></i>
          <span>Cart</span>
        </button>

        <button className="sidebar-link active">
          <i className="bi bi-person"></i>
          <span>Profile</span>
        </button>
      </div>

      <button className="sidebar-link logout-btn" onClick={handleLogOut}>
        <i className="bi bi-box-arrow-right"></i>
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default ProfileSidebar;
