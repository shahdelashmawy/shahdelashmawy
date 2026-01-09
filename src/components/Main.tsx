import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/shahd-el-ashmawy-a6519314a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Shahd El Ashmawy</h1>
          <p>Product Manager</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/shahd-el-ashmawy-a6519314a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
    </div>
  );
}

export default Main;