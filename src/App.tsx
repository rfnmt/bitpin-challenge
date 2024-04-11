import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import { Suspense } from "react";
import Layout from "@/shared/Layout";
import { ErrorBoundary } from "./shared/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
