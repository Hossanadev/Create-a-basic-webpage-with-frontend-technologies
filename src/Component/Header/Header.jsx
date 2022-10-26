import React from "react";
import ProfilePicture from "./Profile";
import Social from "./Social";


const Header = () => {

  return (
    <>
      <div className="header">
        <ProfilePicture />
        <Social />
      </div>
    </>
  );
};

export default Header;
