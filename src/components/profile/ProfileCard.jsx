import toast from "react-hot-toast";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import { useState } from "react";

const ProfileCard = () => {
  const { user } = useSelector((store) => store.user);

  const [close, onClose] = useState(true);

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

      <button className="edit-profile-btn" onClick={() => onClose(false)}>
        <i className="bi bi-pencil"></i>
        Edit Profile
      </button>

      {!close && <EditProfile onClose={onClose} />}
    </div>
  );
};

export default ProfileCard;
