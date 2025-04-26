import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ adminOnly }) => {
  const loginState = useSelector((state) => state.login.login);

  if (!loginState) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && loginState.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  if (!adminOnly && loginState.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
