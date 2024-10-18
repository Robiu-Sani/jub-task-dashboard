import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import { VscThreeBars } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";

export default function DashboardRoot() {
  const [CallNav, setCallNav] = useState(false);

  return (
    <div className={`w-full flex justify-between gap-5`}>
      <div
        className={`min-w-[230px] ${
          CallNav ? "-left-[100%]" : "left-0"
        }  absolute md:static z-50`}
      >
        <RxCrossCircled
          onClick={() => setCallNav(!CallNav)}
          className="block md:hidden text-white absolute top-2 right-2"
        />
        <DashboardNav />
      </div>
      <div className="w-[calc(100%-40px)] mr-5 ">
        <div className="w-full h-[65px] flex justify-between mb-2  border-b items-center">
          <VscThreeBars
            onClick={() => setCallNav(!CallNav)}
            className="p-1 cursor-pointer block md:hidden"
          />
          <div className="hidded md:flex gap-3">
            <p className="text-gray-500">Invoices</p>
            <p className="text-gray-500">/</p>
            <p className="text-gray-700">Create Invoices</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="relative flex justify-center items-center ">
              <IoSearch className="md:absolute md:left-2 text-blue-600 " />
              <input
                type="search"
                placeholder="Search here"
                className="px-3 pl-7 hidden md:block w-[300px] py-1 rounded-md text-blue-600 placeholder:text-blue-400 bg-blue-100"
              />
            </div>
            <IoMdNotificationsOutline className="text-blue-600" />
          </div>
        </div>
        <div className="w-full h-[calc(100vh-65px)] overflow-y-auto noneScroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
