import React from "react";
import { CreateNewUserForm } from "../../../features/CreateNewForms/CreateNewForms";
import Navbar from "../../../features/Navbar/Navbar";

const CreateUser = () => {
  return (
    <div>
      <Navbar />
      <CreateNewUserForm />
    </div>
  );
};
export default CreateUser;
