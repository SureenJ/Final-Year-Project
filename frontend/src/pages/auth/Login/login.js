import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/token/", {
        username,
        password,
      })
      .then((res)=>{
        if(res.status === 200){
          toast.success('Login success');
          localStorage.setItem('access_token', res.data.access);
          localStorage.setItem('refresh_token', res.data.refresh);
          window.location.href = '/';
        }
      })
      .catch(function (error) {
        toast.error(error.toString());
        console.log(error);
      });
  };
  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16  lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Get started today!
            </h1>
          </div>
          <form
            action
            className="mx-auto mt-8 mb-0 max-w-md space-y-4"
            onSubmit={login}
          >
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 0C7.8 0 6 1.8 6 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM3 16v3h14v-3c0-3.3-2.7-6-6-6H9c-3.3 0-6 2.7-6 6z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <a className="underline" href>
                  Sign up
                </a>
              </p>
              <input
                type="submit"
                onClick={login}
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white cursor-pointer"
                value={"Sign in"}
              >
              </input>
            </div>
          </form>
        </div>
        
      </section>
    </>
  );
}

export default Login;
