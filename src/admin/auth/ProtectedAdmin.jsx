import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token || token === "undefined" || token === "null") {
    return <Navigate to="sashaktlogin" replace />;
  }

  return children;
};

export default ProtectedAdmin;
