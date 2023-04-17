import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.js";
import Contact from "./pages/contact/Contact.js";
import Error from "./Components/404/Error.js";
import Login from "./pages/auth/Login/login.js";
import Register from "./pages/auth/Register/register.js";
import Single from "./pages/SingleBlogs/Single.js";
import AboutUs from "./pages/Aboutus/Aboutus.js";
import OverView from "./Admin/Overview/overview.js";
import Appointment from "./Admin/Appointment/Appointment.js";
import Patinet from "./Admin/MyPatient/Patinet.js";
import Dash from "./Users/pages/dash.js";
import AppointmentUser from "./Users/pages/Appointment.js";
import Header from "./Components/Header/header.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Tests from "./Users/pages/Tests.js";
import DoctorApplointmentsTable from "./Users/components/DoctorAppointmentsTable.js";
import DoctorAppointments from "./Users/pages/DoctorAppointments.js";
import RedirectAdmin from "./hooks/RedirectAdmin.js";
import ValidateDoctor from "./hooks/ValidateDoctor.js";
import ValidateLogged from "./hooks/ValidateLogged.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Frontend panel */}
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/single" element={<Single />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* Doctor Panel */}
        <Route path="/overview" element={<OverView />} />
        <Route path="/patinet" element={<Patinet />} />

        <Route path="/appointment" element={<Appointment /> } />

        {/* Patinet Panel */}
        <Route path="/doctor/:id" element={<Dash />} />
        <Route
          path="/doctor/appointments"
          element={
            <ValidateDoctor>
              <DoctorAppointments />
            </ValidateDoctor>
          }
        />
        <Route path="/user/appointments" element={<ValidateLogged><AppointmentUser /></ValidateLogged>} />

        <Route path="/user/tests" element={<ValidateLogged><Tests /></ValidateLogged>} />
        {/* Page 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
