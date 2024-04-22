import "./Header.scss"
import { Link } from "react-router-dom"
import cartSvg from "../../assets/shopping-cart-17-svgrepo-com.svg"

const Header = () => {
  return (
    <header className="header-main">
      <Link to="/">🍺</Link>
      <div>
        <h1>Beers for tears</h1>
        <p>Buy your favorite beer</p>
      </div>
      <Link to="/order">
        <img className="cart-svg" src={cartSvg} alt="cart" />
      </Link>
    </header>
  )
}

export default Header
