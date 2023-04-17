import React from "react";
import Sidebar from "../components/sidebar";
import { useState } from "react";
import UserApplointmentsTable from "../components/UserAppointmentsTable";

function AppointmentUser() {
  const [date, setdate] = useState();
  
  console.log("Date", date);
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-gray-100 rounded-2xl pt-24">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <div className="sm:flex-row">
              <h1 className="mb-4 text-3xl tracking-tight font-semibold text-gray-900 text-center">
                My Appointments
              </h1>
            </div>
            <div className="w-full mb-8 lg:mb-12">
              {/* Form Start from Here */}
              <UserApplointmentsTable />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AppointmentUser;
