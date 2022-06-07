import { Navigate, Outlet } from "react-router-dom";

function ProtectedUserRoute({ user }) {
  // const currentUser = useSelector(state=> state.user)
  // const { path } = props
  let token = document.cookie.replace("token=", "");

  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedUserRoute;
