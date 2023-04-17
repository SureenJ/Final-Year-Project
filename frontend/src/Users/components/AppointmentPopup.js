import React from 'react';

const AppointmentPopup = ({ appointment, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Appointment Details</h3>
            <button onClick={onClose} className="bg-gray-100 hover:bg-gray-200 rounded-full p-1 absolute right-0 top-0 m-2">
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-4 py-3 sm:p-6">
            <p className="mb-3"><span className="font-bold">Doctor:</span> {'Dr. ' + appointment.doctor.user.first_name + ' ' + appointment.doctor.user.last_name}</p>
            <p className="mb-3"><span className="font-bold">Patient:</span> {appointment.patient.first_name + ' ' + appointment.patient.last_name}</p>
            <p className="mb-3"><span className="font-bold">Date:</span> {appointment.appointment_date}</p>
            <p className="mb-3"><span className="font-bold">Symptoms:</span> {appointment.symptoms}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPopup;
