import "./PersonalInformation.css";
import { useSelector } from "react-redux";

const PersonalInformation = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="personal-information">
      <div className="personal-information-header">
        <h2>Personal Information</h2>
      </div>

      <div className="personal-information-grid">
        <div className="info-item">
          <span>First Name</span>
          <p>{user.firstName}</p>
        </div>

        <div className="info-item">
          <span>Last Name</span>
          <p>{user.lastName}</p>
        </div>

        <div className="info-item">
          <span>Email</span>
          <p>{user.email}</p>
        </div>

        <div className="info-item">
          <span>Username</span>
          <p>{user.username}</p>
        </div>

        <div className="info-item">
          <span>Gender</span>
          <p>{user.gender || "Not Added"}</p>
        </div>

        <div className="info-item">
          <span>Age</span>
          <p>{user.age || "Not Added"}</p>
        </div>

        <div className="info-item">
          <span>Date of Birth</span>
          <p>{user.birthDate || "Not Added"}</p>
        </div>

        <div className="info-item">
          <span>Phone</span>
          <p>{user.phone || "Not Added"}</p>
        </div>

        <div className="info-item address-item">
          <span>Address</span>
          <p>
            {user?.address
              ? `${user.address.address}, ${user.address.city}, ${user.address.state}`
              : "Not Added"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
