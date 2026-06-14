import { useRef } from "react";
import "./EditProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/user";

const EditProfile = ({ onClose }) => {
  const { user } = useSelector((store) => store.user);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const dateOfBirthRef = useRef();
  const genderRef = useRef();

  const dispatch = useDispatch();

  const formatDateForInput = (dateStr) => {
    const [year, month, day] = dateStr.split("-");

    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userAction.editProfile({
        firstName: firstNameRef.current.value || user.firstName, //? if empty hai to prev values aayengi

        lastName: lastNameRef.current.value || user.lastName,

        email: emailRef.current.value || user.email,

        gender: genderRef.current.value || user.gender,

        birthDate: dateOfBirthRef.current.value || user.birthDate,
      }),
    );
    onClose(true);
  };

  return (
    <div className="edit-profile-overlay" onClick={() => onClose(true)}>
      <div className="edit-profile-modal" onClick={(e) => e.stopPropagation()}>
        <div className="edit-profile-header">
          <h2>Edit Profile</h2>

          <button className="close-btn" onClick={() => onClose(true)}>
            ✕
          </button>
        </div>

        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label>First Name</label>
              <input
                ref={firstNameRef}
                defaultValue={user.firstName}
                type="text"
                placeholder="Enter first name"
              />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input
                ref={lastNameRef}
                defaultValue={user.lastName}
                type="text"
                placeholder="Enter last name"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              ref={emailRef}
              defaultValue={user.email}
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div className="input-group">
            <label>Gender</label>
            <select ref={genderRef} defaultValue={user.gender}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="input-group">
            <label>Date of Birth</label>
            <input
              ref={dateOfBirthRef}
              type="date"
              defaultValue={formatDateForInput(user.birthDate)}
            />
          </div>

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => onClose(true)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "var(--mainColor)",
                color: "white",
              }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
