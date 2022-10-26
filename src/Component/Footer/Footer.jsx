import React from 'react';
import "./Footer.css";
import slackIC from "../../Images/slackIcon.svg";
import githubIC from "../../Images/githubIcon.svg";
import zuriIC from "../../Images/zuriIcon.svg";
import ingreIC from "../../Images/ingresIcon.svg";

const footerArea = {
    icons: {
        slackIcon: slackIC,
        slackAlt: "slack",
        githubIcon: githubIC,
        githubAlt: "github"
    },
    hngArea: {
        zuriIcon: zuriIC,
        zuriAlt: "zuri",
        footerText: "HNG Intership 9 Frontend Task",
        ingresiveIcon: ingreIC,
        ingresAlt: "ingresive"
    }
}

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footer01'>
               <img className='f01' src={footerArea.icons.slackIcon} alt={footerArea.icons.slackAlt}/>
               <img className='f02' src={footerArea.icons.githubIcon} alt={footerArea.icons.githubAlt}/>
            </div>
            <hr className='hr'/>
            <div className='footer02'>
                <div><img className='f03' src={footerArea.hngArea.zuriIcon} alt={footerArea.hngArea.zuriAlt}/></div>
                <div><span className='f04'>{footerArea.hngArea.footerText}</span></div>
                <div><img className='f05' src={footerArea.hngArea.ingresiveIcon} alt={footerArea.hngArea.ingresAlt}/></div>
            </div>
        </div>
    </>
  )
}

export default Footer;