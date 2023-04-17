import axios from "axios";
import { useEffect, useState } from "react";
import AppointmentPopup from "./AppointmentPopup";

const UserApplointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currAppointment, setCurrAppointment] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/appointment/patient", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        setAppointments(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-lg rounded-br-lg">
      {showPopup ? (
        <AppointmentPopup
          appointment={currAppointment}
          setShowPopup={setShowPopup}
          onClose = {()=>{setShowPopup(false)}}
        />
      ) : null}
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Doctor
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white gap-y-8 ">
          {appointments.map((appointment, index) => {
            return (
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">
                        #{appointment.id}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    />
                    <span className="relative text-xs">
                      Dr.{" "}
                      {appointment.doctor.user.first_name +
                        " " +
                        appointment.doctor.user.last_name}
                    </span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  {appointment.appointment_date}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-left border-b border-gray-500 text-sm leading-5">
                  <button
                    className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                    onClick={() => {
                      setShowPopup(true);
                      setCurrAppointment(appointment);
                    }}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserApplointmentsTable;
