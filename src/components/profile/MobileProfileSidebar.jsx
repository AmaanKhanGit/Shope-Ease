import { useDispatch } from "react-redux";
import "./MobileProfileSidebar.css";
import { useNavigate } from "react-router-dom";
import { userAction } from "../../store/user";
import toast from "react-hot-toast";
import { wishlistAction } from "../../store/wishlist";

const MobileProfileSidebar = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
    dispatch(userAction.logout());
    dispatch(wishlistAction.clearWishlist());
  };

  const handleDummyBtn = () => {
    toast.success("I'll add it SOON!", {
      position: "top-left",
    });
  };

  return (
    <>
      <div
        className={`mobile-sidebar-backdrop ${show ? "show" : ""}`}
        onClick={() => setShow(false)}
      />

      <aside className={`mobile-profile-sidebar ${show ? "show" : ""}`}>
        <div className="mobile-sidebar-header">
          <h4>My Profile</h4>

          <button onClick={() => setShow(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="mobile-sidebar-links">
          <button className="sidebar-link" onClick={handleDummyBtn}>
            <i className="bi bi-speedometer2"></i>
            Dashboard
          </button>

          <button className="sidebar-link" onClick={handleDummyBtn}>
            <i className="bi bi-heart"></i>
            Wishlist
          </button>

          <button className="sidebar-link" onClick={handleDummyBtn}>
            <i className="bi bi-cart3"></i>
            Cart
          </button>

          <button className="sidebar-link active">
            <i className="bi bi-person-circle"></i>
            Profile
          </button>
        </div>

        <button className="sidebar-link logout-btn" onClick={handleLogOut}>
          <i className="bi bi-box-arrow-right"></i>
          Logout
        </button>
      </aside>
    </>
  );
};

export default MobileProfileSidebar;
