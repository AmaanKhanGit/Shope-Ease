import { useSelector } from "react-redux";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileCard from "../components/profile/ProfileCard";
import WishlistSummary from "../components/profile/WishlistSummary";
import CartSummary from "../components/profile/CartSummary";
import PersonalInformation from "../components/profile/PersonalInformation";
import LogoutSection from "../components/profile/LogoutSection";

const Profile = () => {
  const userDataHere = useSelector((store) => store.user);
  console.log(userDataHere);

  //^ remember <div className="profile-card-ui">

  //? details
  //? first name
  //? last name
  //? email
  //? image
  //? gender
  //? address
  //? username
  //? age
  //? dob
  //? phone

  return (
    <div className="profile-page">
      <ProfileSidebar />

      <div className="profile-content">
        <ProfileHeader />
        <ProfileCard />
        <WishlistSummary />
        <CartSummary />
        <PersonalInformation />
        <LogoutSection />
      </div>
    </div>
  );
};

export default Profile;
