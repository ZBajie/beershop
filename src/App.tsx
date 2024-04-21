import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./pages/Layout/Layout"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Order from "./pages/Order/Order"

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/order",
          element: <Order />,
        },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
