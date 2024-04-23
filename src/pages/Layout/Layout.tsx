import "./Layout.scss"
import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Elephant from "../../components/Elephant/Elephant"
import { RootState } from "../../state/store"
import { useSelector } from "react-redux"

const Layout = () => {
  const styleValue = useSelector((state: RootState) => state.style.styleValue)
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      {styleValue > 2 && <Elephant />}
      <Footer />
    </div>
  )
}

export default Layout
