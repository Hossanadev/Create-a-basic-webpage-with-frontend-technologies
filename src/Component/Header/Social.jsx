import React from "react";
import "./Header.css";

const ourSocial = {
  slac: {
    title: "Slack",
    id: "slack",
  },
};

const Social = () => {
  return (
    <>
      <div className="slack">
        {ourSocial.slac.title}
      </div>
    </>
  );
};

export default Social;
