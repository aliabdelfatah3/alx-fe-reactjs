import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children }) {
  // Check if the user is authenticated
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
