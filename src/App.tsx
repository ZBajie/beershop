import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./pages/Layout/Layout"
import ErrorPage from "./pages/ErrorPage/ErrorPage"

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
