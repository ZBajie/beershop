import "./Layout.scss"
import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Elephant from "../../components/Elephant/Elephant"
import { RootState } from "../../state/store"
import { useSelector } from "react-redux"

const Layout = () => {
  const styleValue = useSelector((state: RootState) => state.style.styleValue)

  const PokemonPage = window.location.pathname === "/pokemons"

  const renderHeader = !PokemonPage && <Header />
  const renderElephant = !PokemonPage && styleValue > 2 && <Elephant />
  const renderFooter = !PokemonPage && <Footer />
  return (
    <div className="layout">
      {renderHeader}
      <main>
        <Outlet />
      </main>
      {renderElephant}
      {renderFooter}
    </div>
  )
}

export default Layout
