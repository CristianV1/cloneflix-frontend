import { TYPES } from "./types";

let baseUrl = "http://localhost:5000/";

export const getContents = (id) => {
  return async (dispatch) => {
    const token = document.cookie.replace("token=", "");
    console.log("token es: ", token);
    let json = await fetch(`${baseUrl}user/content/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    console.log("seteado", json);
    let userContent = await json.json();
    console.log("usuario: ", userContent);

    return dispatch({
      type: TYPES.GET_USER_CONTENTS,
      payload: userContent,
    });
  };
};

export const getAllContents = () => {
  return async (dispatch) => {
    const token = document.cookie.replace("token=", "");
    let json = await fetch(`${baseUrl}content/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    console.log("seteado", json);
    let allContent = await json.json();
    console.log("usuario: ", allContent);

    return dispatch({
      type: TYPES.GET_USER_CONTENTS,
      payload: allContent,
    });
  };
};

export const createUser = (inputs) => {
  return async (dispatch) => {
    const token = document.cookie.replace("token=", "");
    let json = await fetch(`${baseUrl}user/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password,
        isAdmin: inputs.isAdmin,
        token: token,
      }),
    });
    let user = await json.json();

    return dispatch({
      type: TYPES.SET_USER,
      payload: user,
    });
  };
};

export const setUser = (inputs) => {
  return async (dispatch) => {
    const token = document.cookie.replace("token=", "");
    console.log(token);
    let json = await fetch(`${baseUrl}user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password,
        token: token,
      }),
    });
    console.log("seteado", json.json());
    let user = await json.json();
    console.log("usuario: ", user);
    /*
    if (typeof user == "string") {
      setErrors(user);
      setTimeout(() => {
        setErrors("");
      }, 5000);
    } else if (typeof user == "object") {
      document.cookie = `token=${user.token};path=/;samesite=strict`;
      console.log(user.logedUser);
      console.log(user.logedUser.logedUser);

      localStorage.setItem("user", JSON.stringify(user.logedUser));
      navigate("/home");
    }
*/
    return dispatch({
      type: TYPES.SET_USER,
      payload: user,
    });
  };
};
