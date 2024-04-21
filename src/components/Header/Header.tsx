import "./Header.scss"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header-main">
      <Link to="/">🍺</Link>
      <div>
        <h1>Beers for tears</h1>
        <p>Buy your favorite beer</p>
      </div>
      <Link to="/order">🍺</Link>
    </header>
  )
}

export default Header
