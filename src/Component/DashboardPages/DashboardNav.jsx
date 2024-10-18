import logo from "../../images/logo.png";
import { FaArrowRightToBracket } from "react-icons/fa6";
import {
  FaFileInvoice,
  FaWarehouse,
  FaShoppingCart,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { TbUserSquare } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";

export default function DashboardNav() {
  return (
    <div className="min-h-screen flex flex-col justify-between !bg-[#921B1D] p-5">
      <div>
        {/* Logo and Logout Icon */}
        <div className="w-full flex justify-between items-start">
          <div className="w-full my-5 flex gap-2">
            <img src={logo} alt="log image" className="w-[45px]" />
            <p className="text-white font-medium">
              Abirami <br />
              Enterprises
            </p>
          </div>
          <FaArrowRightToBracket className="text-white mt-5 text-xl rotate-180" />
        </div>

        {/* Navigation Items */}
        <div className="">
          <ul className="">
            {/* Dashboard */}
            <li className="text-white flex items-center justify-between gap-3 cursor-pointer hover:bg-[#6f0e0e] p-2 rounded-md">
              <div className="flex items-center gap-2">
                <AiOutlineDashboard className="text-lg" />
                <span>Dashboard</span>
              </div>
              <IoIosArrowForward className="text-lg" />
            </li>
            {/* Clients */}
            <li className="text-white flex items-center justify-between gap-3 cursor-pointer hover:bg-[#6f0e0e] p-2 rounded-md">
              <div className="flex items-center gap-2">
                <LuUsers className="text-lg" />
                <span>Clients</span>
              </div>
              <IoIosArrowForward className="text-lg" />
            </li>
            {/* Suppliers */}
            <li className="text-white flex items-center justify-between gap-3 cursor-pointer hover:bg-[#6f0e0e] p-2 rounded-md">
              <div className="flex items-center gap-2">
                <TbUserSquare className="text-lg" />
                <span>Suppliers</span>
              </div>
              <IoIosArrowForward className="text-lg" />
            </li>
            {/* Invoices */}
            <li className="text-white flex items-center justify-between gap-3 cursor-pointer hover:bg-[#6f0e0e] p-2 rounded-md">
              <div className="flex items-center gap-2">
                <FaFileInvoice className="text-lg" />
                <span>Invoices</span>
              </div>
              <IoIosArrowForward className="text-lg" />
            </li>
            {/* Inventory */}
            <li className="text-white flex items-center justify-between gap-3 cursor-pointer hover:bg-[#6f0e0e] p-2 rounded-md">
              <div className="flex items-center gap-2">
                <FaWarehouse className="text-lg" />
                <span>Inventory</span>
              </div>
              <IoIosArrowForward className="text-lg" />
            </li>
            {/* Purchase */}
            <li className="text-white flex items-center justify-between gap-3 cursor-pointer hover:bg-[#6f0e0e] p-2 rounded-md">
              <div className="flex items-center gap-2">
                <FaShoppingCart className="text-lg" />
                <span>Purchase</span>
              </div>
              <IoIosArrowForward className="text-lg" />
            </li>
            {/* Settings */}
            <li className="text-white flex items-center justify-between gap-3 cursor-pointer hover:bg-[#6f0e0e] p-2 rounded-md">
              <div className="flex items-center gap-2">
                <FaCog className="text-lg" />
                <span>Settings</span>
              </div>
              <IoIosArrowForward className="text-lg" />
            </li>
          </ul>
        </div>
      </div>
      <li className="text-white flex items-center justify-between gap-3 cursor-pointer hover:bg-[#6f0e0e] p-2 rounded-md">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl" />
          <span>Admin</span>
        </div>
        <IoIosArrowForward className="text-lg" />
      </li>
    </div>
  );
}
