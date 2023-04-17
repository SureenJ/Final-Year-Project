import { useEffect } from "react";

const ValidateLogged = (props) => {
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/";
    }
  }, []);
  return <>{props.children}</>;
};

export default ValidateLogged;
