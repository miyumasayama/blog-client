import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from "../../../reducers/auth/selectors";
import { useAppSelector } from "../../../store";

export const Secured = () => {
  const isAuthenticated = useAppSelector(selectToken);

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
};
