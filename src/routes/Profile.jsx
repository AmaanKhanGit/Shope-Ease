import { useSelector } from "react-redux";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileCard from "../components/profile/ProfileCard";
import WishlistSummary from "../components/profile/WishlistSummary";
import CartSummary from "../components/profile/CartSummary";
import PersonalInformation from "../components/profile/PersonalInformation";
import LogoutSection from "../components/profile/LogoutSection";
import { useState } from "react";
import MobileProfileSidebar from "../components/profile/MobileProfileSidebar";

const Profile = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="profile-page">
      <ProfileSidebar />
      <MobileProfileSidebar show={showSidebar} setShow={setShowSidebar} />

      <div className="profile-content">
        <ProfileHeader setShowSidebar={setShowSidebar} />
        <ProfileCard />
        <div className="profile-summary-container">
          <WishlistSummary />
          <CartSummary />
        </div>
        <PersonalInformation />
        <LogoutSection />
      </div>
    </div>
  );
};

export default Profile;
