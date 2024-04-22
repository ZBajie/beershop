import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../state/store"
import "./Cart.scss"
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../state/cartSlice/cartSlice"

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="cart">
      {cart.cart && cart.cart.length ? (
        cart.cart.map((beer) => (
          <div className="cart-body" key={beer.id}>
            <div>{beer.name}</div>
            <button
              onClick={() => {
                dispatch(decrementQuantity(beer.id))
              }}
            >
              -
            </button>
            <div>{beer.quantity} pcs</div>
            <button
              onClick={() => {
                dispatch(incrementQuantity(beer.id))
              }}
            >
              +
            </button>
            <div>{beer.price} $/pcs</div>
            <button
              onClick={() => {
                dispatch(removeItem(beer.id))
              }}
            >
              Remove
            </button>
            <div>{beer.price * beer.quantity} $</div>
          </div>
        ))
      ) : (
        <div className="cart-empty">
          <p>Cart is empty</p>
        </div>
      )}
      <div className="cart-footer">
        <p>Total: {cart.sum} $</p>
      </div>
    </div>
  )
}

export default Cart
