import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import ContentDetails from "./components/features/ContentDetails/ContentDetails";
import ViewUsers from "./components/pages/User/ViewUsers/ViewUsers";

import ProtectedAdminRoute from "./helpers/ProtectAdminRoutes";
import AlreadyLogedRoutes from "./helpers/AlreadyLogedRoutes";
import ProtectedUserRoute from "./helpers/ProtectUserRoutes";
import CreateUser from "./components/pages/User/CreateUser/CreateUser";
import ViewContents from "./components/pages/Content/ViewContents/ViewContents";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AlreadyLogedRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedUserRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/view-content:id" element={<ContentDetails />} />
        </Route>
        <Route path="/view-users" element={<ViewUsers />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/view-contents" element={<ViewContents />} />
        <Route element={<AlreadyLogedRoutes />}>
          <Route path="*" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
