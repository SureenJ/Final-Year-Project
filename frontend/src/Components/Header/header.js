import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [specializations, setSpecializations] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/doctor/specialization")
      .then((res) => {
        setSpecializations(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <nav class=" bg-gray-900 fixed top-0 w-screen z-20">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="#" class="flex items-center">
          <h1 class="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Smart Health Manager
          </h1>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto "
              >
                Doctors
                <svg
                  class="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                class="z-40 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 lg:w-44"
              >
                <ul
                  class="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownLargeButton"
                >
                  {specializations.map((specialization) => {
                    return (
                      <li>
                        <Link
                          to={`/doctor/${specialization.id}`}
                          class="block px-4 py-2 hover:bg-gray-100"
                        >
                          {specialization.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            {localStorage.getItem("access_token") ? (
              <>
                <li>
                  <Link
                    to="user/appointments"
                    class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0  "
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0  "
                    aria-current="page"
                    onClick={() => {
                      localStorage.removeItem("access_token");
                      localStorage.removeItem("refresh_token");
                    }}
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/signin"
                    class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0  "
                    aria-current="page"
                   
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    to="/signup"
                    class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0  "
                    aria-current="page"
                   
                  >
                    Sign Up
                  </Link>
                </li>

              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
