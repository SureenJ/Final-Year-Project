import axios from "axios";
import { useEffect, useState } from "react";

const TestsTable = () => {
  const [appointments, setAppointments] = useState([{appointment_type: {name: ""}}]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tests", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setAppointments(res.data.response);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-lg rounded-br-lg">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
              Document
            </th>
          </tr>
        </thead>
        <tbody className="bg-white gap-y-8 ">
          {appointments.map((appointment, index) => {
            return (
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#{appointment.id}</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    />
                    <span className="relative text-xs">{'asdf'}</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  {appointment.date}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-left border-b border-gray-500 text-sm leading-5">
                  {
                    appointment.report?
                    <a href={`http://localhost:8000${appointment.report}`} target="_blank" className="text-green-500 cursor-pointer font-semibold" rel="noreferrer">Released</a>
                    :<p className="text-red-500">Not Released</p>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TestsTable;
