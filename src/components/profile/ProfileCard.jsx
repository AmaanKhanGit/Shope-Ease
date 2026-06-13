import toast from "react-hot-toast";
import "./ProfileCard.css";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="profile-card-ui profile-card">
      <div className="profile-user-info">
        <img src={user.image} alt={user.firstName} className="profile-avatar" />

        <div className="profile-user-details">
          <h2>
            {user.firstName} {user.lastName}
          </h2>

          <p className="username">@{user.username}</p>

          <p className="email">
            <i className="bi bi-envelope"></i>
            {user.email}
          </p>
        </div>
      </div>

      <button
        className="edit-profile-btn"
        onClick={() => toast.success("soon")}
      >
        <i className="bi bi-pencil"></i>
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileCard;
