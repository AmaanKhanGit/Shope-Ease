import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login-signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
