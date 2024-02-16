import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { isAuthenticated } from "./index";

const AdminRoute = () =>
  isAuthenticated() && isAuthenticated().user.role === 1 ? (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" />
  );

export default AdminRoute;
