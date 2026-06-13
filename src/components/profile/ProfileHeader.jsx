import "./ProfileHeader.css";

const ProfileHeader = ({ setShowSidebar }) => {
  return (
    <div className="profile-header">
      <div>
        <h1>My Profile</h1>
        <p>Manage your personal information and account details</p>
      </div>

      <button className="profile-menu-btn" onClick={() => setShowSidebar(true)}>
        <i className="bi bi-list"></i>
      </button>
    </div>
  );
};

export default ProfileHeader;
