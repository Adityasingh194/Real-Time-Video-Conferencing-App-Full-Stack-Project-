// Import core React library
import React from 'react';

// Import global CSS for this page
import "../App.css";

// Import tools from React Router to handle navigation
import { Link, useNavigate } from 'react-router-dom';

// Define and export the LandingPage component
export default function LandingPage() {
  
  // useNavigate is a React Router hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Return the JSX layout for the landing page
  return (
    <div className="landingPageContainer"> {/* Main wrapper for entire landing page */}

      {/* -------- Navigation Bar -------- */}
      <nav>
        {/* Site logo or brand title */}
        <div className="navHeader">
          <h2>Our Video Call</h2> {/* Brand Name */}
        </div>

        {/* Navigation options on the right side */}
        <div className="navlist">
          {/* "Join as Guest" option - hardcoded to a dummy room ID for quick entry */}
          <p onClick={() => navigate("/aljk23")}>Join as Guest</p>

          {/* "Register" option - takes the user to the authentication page */}
          <p onClick={() => navigate("/auth")}>Register</p>

          {/* "Login" block - same as Register in this simplified version */}
          <div onClick={() => navigate("/auth")} role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      {/* -------- Main Section: Slogan + Image -------- */}
      <div className="landingMainContainer"> {/* Holds slogan and visual illustration */}

        {/* Left side - text content: heading, description, and button */}
        <div>
          {/* Headline with colored word */}
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones
          </h1>

          {/* Description under the headline */}
          <p>Cover a distance by Video Call</p>

          {/* Call-to-action button that navigates to the auth page */}
          <div role="button">
            <Link to="/auth">Get Started</Link> {/* Styled link to register/login page */}
          </div>
        </div>

        {/* Right side - an illustration image (can be a phone, people chatting, etc.) */}
        <div>
          {/* Image should be placed in `public/` folder with the name `mobile.png` */}
          <img src="/mobile.png" alt="Video Call Illustration" />
        </div>
      </div>

    </div>
  );
}
