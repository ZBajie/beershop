import "./App.scss"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./pages/Layout/Layout"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Order from "./pages/Order/Order"
import { useSelector } from "react-redux"
import { RootState } from "./state/store"
import Pokemons from "./pages/Pokemons/Pokemons"

function App() {
  const styleValue = useSelector((state: RootState) => state.style.styleValue)
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
        {
          path: "/pokemons",
          element: <Pokemons />,
        },
      ],
    },
  ])
  return (
    <div
      className={`App ${styleValue > 0 && "happy"} ${
        styleValue > 1 && "drunk"
      }`}
    >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
