import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
import withAuth from "../utils/withAuth.jsx";

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

const handleJoinVideoCall = async () => {
  if (!meetingCode.trim()) {
    console.log("No meeting code entered");
    return;
  }

  console.log("Joining meeting with code:", meetingCode);

  try {
    await addToUserHistory(meetingCode.trim());
    console.log("History saved, redirecting...");
    navigate(`/${meetingCode.trim()}`);
  } catch (err) {
    console.error("Error adding to history or navigating:", err);
  }
};


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <>
      <div className="navBar">
        <h2>Our Video Call</h2>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => navigate("/history")} title="History">
            <RestoreIcon style={{ color: 'white' }} />
          </IconButton>
          <p style={{ color: 'white', marginRight: "1rem" }}>History</p>

          <Button
            onClick={handleLogout}
            variant="outlined"
            style={{ color: "white", borderColor: "white" }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Providing Quality Video Call Just Like Quality Education</h2>

            <div style={{ display: 'flex', gap: "10px", marginTop: "20px" }}>
              <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                label="Meeting Code"
                variant="outlined"
              />
              <Button variant="contained" onClick={handleJoinVideoCall}>
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="rightPanel">
          <img src="/logo3.png" alt="Video Call" />
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
