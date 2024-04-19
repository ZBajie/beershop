import "./Header.scss"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header-main">
      <Link to="/">🍺</Link>
      <div>
        <h1>Beers for tears</h1>
        <p>Find your favorite beer</p>
      </div>
      <p>🍺</p>
    </header>
  )
}

export default Header
