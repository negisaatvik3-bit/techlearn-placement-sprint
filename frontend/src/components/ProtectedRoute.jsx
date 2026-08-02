import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRole }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // Not logged in
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // Paid pages require paid role
  if (allowedRole === "paid" && user.role !== "paid") {
    return <Navigate to="/choose-plan" replace />;
  }

  return children;
}

export default ProtectedRoute;