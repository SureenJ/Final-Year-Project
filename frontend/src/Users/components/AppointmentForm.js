import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function AppointmentForm({ setShowForm, doctor }) {
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(
      "http://localhost:8000/api/appointment/",
      {
        doctor: doctor.id,
        appointment_date: date,
        symptoms: symptoms,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    )
    .then((res)=>{
        toast.success("Appointment created successfully");
        setShowForm(false);
    })
    .catch((err)=>{
        console.log(err.response.data.message)
        toast.error(err.response.data.message);
    })
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-[40rem]">
        <h2 className="text-2xl text-center font-bold mb-4">
          Create Appointment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="date"
            >
              Appointment Date
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="patient"
            >
              Patient
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="patient"
              type="text"
              placeholder="Enter your symptopms."
              value={symptoms}
              onChange={(event) => setSymptoms(event.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              type="submit"
            >
              Save
            </button>
            <button
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
