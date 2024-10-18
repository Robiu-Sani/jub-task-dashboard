import { createBrowserRouter } from "react-router-dom";
import DashboardRoot from "../DashboardPages/DashboardRoot";
import ErrorPage from "./ErrorPage";
import Invoices from "../DashboardPages/invoeces/Invoices";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Invoices />,
      },
    ],
  },
]);
