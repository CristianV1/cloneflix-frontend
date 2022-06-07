import { Navigate, Outlet } from "react-router-dom";

function AlreadyLogedRoutes() {
  // const currentUser = useSelector(state=> state.user)
  // const { path } = props
  let token = document.cookie.replace("token=", "");

  return token ? <Navigate to="/home" /> : <Outlet />;
}

export default AlreadyLogedRoutes;
