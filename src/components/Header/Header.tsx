import "./Header.scss"
import { Link } from "react-router-dom"
import cartSvg from "../../assets/cart-large-minimalistic-svgrepo-com.svg"
import cartSvgChecked from "../../assets/cart-check-svgrepo-com.svg"
import carlsberg from "../../assets/beers/carlsberg.png"
import leffe from "../../assets/beers/leffe.png"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
const Header = () => {
  const cart = useSelector((state: RootState) => state.cart)

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
        {cart.cart.length > 0 ? (
          <img className="cart-svg" src={cartSvgChecked} alt="cart" />
        ) : (
          <img className="cart-svg" src={cartSvg} alt="cart" />
        )}
      </Link>
    </header>
  )
}

export default Header
