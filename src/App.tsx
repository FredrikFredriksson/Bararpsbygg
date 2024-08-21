import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    // Add more routes here if needed
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
