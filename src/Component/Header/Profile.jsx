import React from "react";
import "./Header.css";
import profPicx from "../../Images/profileImg.svg";
import navIC from "../../Images/navIcon.svg";

const ProfPix = {
  url: "https://twitter.com/Hossanadev",
  img: profPicx,
  navi: navIC,
  navAlt: "Navigation",
  alt: "Hossanadev",
  id: "profile__img"
};

const ProfilePicture = () => {
  return (
    <>
        <div className="profile">
              <div>
                  <img alt={ProfPix.alt} src={ProfPix.img} />
              </div>
              <div>
                  <img className="nav" src={ProfPix.navi} alt={ProfPix.navAlt} />
              </div>
              <div>
                  {ProfPix.alt}
              </div>
        </div>
    </>
  
)};

export default ProfilePicture;
