import axios from "axios";
import { useEffect, useState } from "react";

const RedirectAdmin = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/api/isAdmin",

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status !== 200) {
          return (window.location.href = "/");
        }
      })
      .catch((err) => {
        console.log(err);
        return (window.location.href = "/");
      });
  }, []);
  return <>{props.children}</>;
};

export default RedirectAdmin;
