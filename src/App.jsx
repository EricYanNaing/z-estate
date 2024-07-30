import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import RoomDetail from "./components/RoomDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/rooms/:id",
          element: <RoomDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
