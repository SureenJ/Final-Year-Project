import React from "react";

function GetinTouch() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-100 py-10 sm:py-10 lg:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-900">
                Problems trying to resolve the conflict between the two majoe
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <div className="flex justify-center">
              <form className="max-w-md">
                <div className="mt-6 flex space-y-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 rounded-md border-0 bg-black/6 px-5 py-3 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetinTouch;
