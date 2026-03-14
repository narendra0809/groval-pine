import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="max-w-7xl">
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
