import React from "react";
import { Link } from "react-router-dom";

function LeadingMedicine() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Leading Medicine
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl ">
              Problems trying to resolve the conflict between the two majoe
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 rounded-xl ">
            <blockquote className="rounded-lg bg-gray-100 p-8">
              <div className="flex items-center justify-center">
                <div className=" flex justify-center">
                  <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="h-16 w-16 mt-2 rounded-full object-cover"
                  />
                  <p className="mt-6 ml-6 text-lg font-medium text-gray-700 justify-center text-center">
                    Paul Starr
                  </p>
                </div>
              </div>
              <ul className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                <li>- the best products start with figma</li>
                <li>- Design with real data</li>
                <li>- Lighting fast prototype</li>
                <li>- Fastest way to organize</li>
                <li>- Work at the speed of thought.</li>
                <li>
                  <Link className="text-blue-500">Learn More</Link>
                </li>
              </ul>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-100 p-8">
              <div className="flex items-center justify-center">
                <div className=" flex justify-center">
                  <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="h-16 w-16 mt-2 rounded-full object-cover"
                  />
                  <p className="mt-6 ml-6 text-lg font-medium text-gray-700 justify-center text-center">
                    Paul Starr
                  </p>
                </div>
              </div>
              <ul className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                <li>- the best products start with figma</li>
                <li>- Design with real data</li>
                <li>- Lighting fast prototype</li>
                <li>- Fastest way to organize</li>
                <li>- Work at the speed of thought.</li>
                <li>
                  <Link className="text-blue-500">Learn More</Link>
                </li>
              </ul>
            </blockquote>
            <blockquote className="rounded-lg bg-gray-100 p-8">
              <div className="flex items-center justify-center">
                <div className=" flex justify-center">
                  <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="h-16 w-16 mt-2 rounded-full object-cover"
                  />
                  <p className="mt-6 ml-6 text-lg font-medium text-gray-700 justify-center text-center">
                    Paul Starr
                  </p>
                </div>
              </div>
              <ul className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                <li>- the best products start with figma</li>
                <li>- Design with real data</li>
                <li>- Lighting fast prototype</li>
                <li>- Fastest way to organize</li>
                <li>- Work at the speed of thought.</li>
                <li>
                  <Link className="text-blue-500">Learn More</Link>
                </li>
              </ul>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}

export default LeadingMedicine;
