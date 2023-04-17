import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import { Link, useParams } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import DoctorDetail from "../components/DoctorDetail";
import axios from "axios";

function Dash() {
  const [showPopup, setShowPopup] = useState(false); // state to control pop-up visibility
  const [doctors, setDoctors] = useState([]); // state to store doctors data
  const { id } = useParams();

  const [currDoctor, setCurrDoctor] = useState({}); // state to store current doctor data
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden"; // disable scrolling when pop-up is open
    } else {
      document.body.style.overflow = "unset"; // enable scrolling when pop-up is closed
    }

    axios
      .get("http://localhost:8000/api/doctor/specialization/" + id)
      .then((res) => {
        setDoctors(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [showPopup, id]);

  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 rounded-2xl pt-20">
      <div className="flex items-start justify-between">
        <div className="w-full flex flex-col gap-y-3 p-8">
          <div className="flex-row gapy-[-20px] mb-8">
            <h1 className="mb-4 text-3xl tracking-tight font-semibold text-gray-900 text-center">
              Our Doctors
            </h1>
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {doctors.map((doctor) => {
            console.log(doctor);
            return (
              <DoctorCard
                doctor={doctor}
                setShowPopup={setShowPopup}
                setCurrDoctor={setCurrDoctor}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Dash;
