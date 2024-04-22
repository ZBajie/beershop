import "./Header.scss"
import { Link } from "react-router-dom"
import cartSvg from "../../assets/shopping-cart-17-svgrepo-com.svg"
import carlsberg from "../../assets/beers/carlsberg.png"
import leffe from "../../assets/beers/leffe.png"
const Header = () => {
  return (
    <header className="header-main">
      <Link to="/">
        <img src={carlsberg} className="beer" alt="Beer" />
        <img src={leffe} alt="Beer" className="beer" />
      </Link>
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
