import React, { useEffect, useState } from "react";
import UserSidebar from "./UserSidebar";
import GlassForPreference from "../components/GlassForPreference";
import { isAuthenticated } from "../pages/auth";
import { getUserDetails } from "../components/uiApi";

const UserDashboard = () => {
  const { token, user } = isAuthenticated();
  const [userDetails, setUserDetails] = useState([]);
  const [preferences, setPreferences] = useState([]);

  function init() {
    getUserDetails(token, user._id).then((data) => {
      setUserDetails(data);
      setPreferences(data.preferences);
    });
  }

  useEffect(() => {
    init();
  }, [preferences]);

  return (
    <>
    <div style={{
      paddingTop: '8px',
      paddingLeft: '108px'
    }}>
      <UserSidebar />
    </div>
      {preferences.length === 0 && <GlassForPreference props={userDetails} />}
      {preferences.length === 0 && (
        <div
          className=""
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0 0 0/.5)",
          }}
        >
        </div>
      )}
    </>
  );
};

export default UserDashboard;
