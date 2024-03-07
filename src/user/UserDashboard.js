import React from "react";
import UserSidebar from "./UserSidebar";
import GlassForPreference from "../components/GlassForPreference";
import { isAuthenticated } from "../pages/auth";

const UserDashboard = () => {
  const { user } = isAuthenticated();

  return (
    <>
      <UserSidebar />

      {user.preferences.length === 0 && <GlassForPreference />}
      {user.preferences.length === 0 && (
        <div
          className=""
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0 0 0/.5)",
          }}
        ></div>
      )}
    </>
  );
};

export default UserDashboard;
