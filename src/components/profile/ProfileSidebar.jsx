import "./ProfileSidebar.css";

const ProfileSidebar = () => {
  return (
    <aside className="profile-sidebar">
      <div className="sidebar-links">
        <button className="sidebar-link">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </button>

        <button className="sidebar-link">
          <i className="bi bi-heart"></i>
          <span>Wishlist</span>
        </button>

        <button className="sidebar-link">
          <i className="bi bi-cart3"></i>
          <span>Cart</span>
        </button>

        <button className="sidebar-link active">
          <i className="bi bi-person"></i>
          <span>Profile</span>
        </button>
      </div>

      <button className="sidebar-link logout-btn">
        <i className="bi bi-box-arrow-right"></i>
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default ProfileSidebar;
