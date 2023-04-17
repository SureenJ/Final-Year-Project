import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppointmentForm from "./AppointmentForm";
const DoctorDetail = ({ setShowPopup, doctor }) => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    console.log(doctor);
  }, [doctor]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 md:w-1/2 text-center md:text-left">
        <div className="sm:flex-row ">
          <div className="flex flex-col gap-y-3">
            <span className="">
              <p className="font-bold text-3xl">
                Dr. {doctor.user.first_name + " " + doctor.user.last_name}{" "}
              </p>
            </span>
            <span className="">
              <p className="font-bold text-xl">Specialization: </p>
              <span className=" text-slate-600 font-normal">
                {doctor.specialization.name}
              </span>
            </span>
            {/* Form Start from Here */}
            <div className="">
              <h3 className="text-xl font-bold">Description</h3>
              <p
                className="mb-2"
                dangerouslySetInnerHTML={{
                  __html: doctor.specialization.description,
                }}
              ></p>
            </div>

            <div className="">
              <h3 className="text-xl font-bold">Available Days</h3>
              <ul className=" list-disc">
                {doctor.days.map((day) => {
                  return <li>{day}</li>;
                })}
              </ul>
            </div>
            <div className="">
              <h3 className="text-xl font-bold">Available Time</h3>
              <p className="mb-2">
                {new Date(
                  "1970-01-01T" + doctor.start_time + "Z"
                ).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                })}{" "}
                to{" "}
                {new Date(
                  "1970-01-01T" + doctor.end_time + "Z"
                ).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                })}
              </p>
            </div>
            {localStorage.getItem("access_token") ? (
              <>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  onClick={toggleForm}
                >
                  Book an Appointment
                </button>
              </>
            ) : null}

            <button
              type="submit"
              className=" text-white bg-red-600 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <AppointmentForm setShowForm={setShowForm} doctor={doctor} />
      )}
    </div>
  );
};

export default DoctorDetail;
