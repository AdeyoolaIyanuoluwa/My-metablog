/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { rest } from 'draft-js/lib/DefaultDraftBlockRenderMap'
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: component, ...rest }) => {
  const token = localStorage.getItem("userToken");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
