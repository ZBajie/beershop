import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import "./Cart.scss"

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart)
  return (
    <div className="cart">
      {cart.cart.map((beer) => (
        <div className="cart-body" key={beer.id}>
          <div>{beer.name}</div>
          <button>-</button>
          <div>{beer.quantity} pcs</div>
          <button>+</button>
          <div>{beer.price} $/pcs</div>
          <div>{beer.price * beer.quantity} $</div>
        </div>
      ))}
      <div className="cart-footer">
        <div>Total:</div>
        <div>{cart.sum} $</div>
      </div>
    </div>
  )
}

export default Cart
