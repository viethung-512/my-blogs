import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UbuntuApplicationInstaller } from "components/UbuntuApplicationInstaller";
import { Layout } from "components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/ubuntu-app-installer",
        element: <UbuntuApplicationInstaller />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
