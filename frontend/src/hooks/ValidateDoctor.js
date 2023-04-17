import axios from "axios";
import { useEffect, useState } from "react";

const ValidateDoctor = (props) => {
    const [isDoctor, setIsDoctor] = useState(false);
    useEffect(() => {
        axios
          .get(
            "http://localhost:8000/api/isDoctor",
    
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            }
          )
          .then((res) => {
            if (res.status !== 200) {
              return setIsDoctor(false);
            }
            setIsDoctor(true);
          })
          .catch((err) => {
            return setIsDoctor(false)
          });
      }, []);
    return ( 
        <>{isDoctor?props.children:null}</>
     );
}
 
export default ValidateDoctor;