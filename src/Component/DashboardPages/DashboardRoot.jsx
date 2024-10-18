import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";

export default function DashboardRoot() {
  return (
    <div className="w-full flex justify-between gap-5">
      <div className=" min-w-[230px] ">
        <DashboardNav />
      </div>
      <div className="w-[calc(100%-40px)] mr-5 ">
        <div className="w-full h-[65px] flex justify-between mb-2  border-b items-center"></div>
        <div className="w-full h-[calc(100vh-65px)] overflow-y-auto noneScroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
