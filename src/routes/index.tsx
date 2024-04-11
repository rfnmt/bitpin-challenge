import { Outlet, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { ErrorBoundary } from "@/shared/ErrorBoundary";

const MainPage = lazy(() => import("@/pages/main"));
const DetailsPage = lazy(() => import("@/pages/details"));

export const ROUTES = {
  MAIN: "/",
  DETAILS: "/details",
};

const ErrorBoundaryLayout = () => (
  <ErrorBoundary>
    <Outlet />
  </ErrorBoundary>
);

export const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
      },
      {
        path: `${ROUTES.DETAILS}/:marketId`,
        element: <DetailsPage />,
      },
    ],
  },
]);
