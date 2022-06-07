import { Navigate, Outlet } from "react-router-dom";

function ProtectedAdminRoute() {
  // const currentUser = useSelector(state=> state.user)
  // const { path } = props
  let token = document.cookie.replace("token=", "");
  let user = JSON.parse(localStorage.getItem("user"));
  console.log("admind local", user);
  return token && user.isAdmin ? <Outlet /> : <Navigate to="/home" />;
}

export default ProtectedAdminRoute;
