import React, { useState } from "react";
import DoctorDetail from "./DoctorDetail";

const DoctorCard = ({ doctor, setCurrDoctor }) => {
  const [showPopup, setShowPopup] = useState(false); // state to control pop-up visibility
  return (
    <div className="border rounded-lg shadow-md p-4 flex items-center">
      <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden ">
        <img
          className=""
          src={"http://localhost:8000" + doctor.image}
          alt={doctor.user.username}
        />
      </div>
      <div className="ml-4">
        <h2 className="text-lg font-semibold">
          {doctor.user.first_name} {doctor.user.last_name}
        </h2>
        <p className="text-gray-600">
          {doctor.specialization.name}
        </p>

        <div
          className="mt-2 text-blue-600 cursor-pointer"
          onClick={() => {
            setShowPopup(true);
          }}
        >
          View Details
        </div>
      </div>
      {showPopup && (
        <DoctorDetail setShowPopup={setShowPopup} doctor={doctor} />
      )}
    </div>
  );
};

export default DoctorCard;
