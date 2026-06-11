import { useSelector } from "react-redux";

const Profile = () => {
  const userDataHere = useSelector((store) => store.user);
  console.log(userDataHere);
  return (
    <>
      <h1>profile</h1>
      <h1>profile</h1>
    </>
  );
};

export default Profile;
