import React from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

function Setting() {
  return (
    <div>
      <main className="relative h-screen overflow-hidden bg-gray-100 rounded-2xl">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Topbar />
            <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
              <div className="sm:flex-row">
                <h1>Settings</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Setting;
